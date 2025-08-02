import { Routes, Route, BrowserRouter } from "react-router-dom";
import ResourcesPage from "./components/static-pages/ResourcesPage.jsx";
import "./App.css";

import AboutMe from "./components/static-pages/AboutMe.jsx";
import NavBar from "./components/static-pages/NavBar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/static-pages/Footer.jsx";

import ThankYouPage from "./components/static-pages/ThankYouPage.jsx";
import AdminHomePage from "./components/admin/AdminHomePage.jsx";
import PublicHomePage from "./components/public/PublicHomePage.jsx";

import LandingPage from "./components/static-pages/LandingPage.jsx";
import LoginPageNew from "./components/public/LoginPageNew.jsx";
import LoginPageReturning from "./components/public/LoginPageReturning.jsx";
import { useEffect, useState } from "react";
import {
  Financial,
  Social,
  Identity,
  AiResponse,
  User,
} from "./classes/exports.js";
import NewUserDataForm from "./components/public/NewUserDataForm.jsx";
import PowerGridPage from "./components/admin/PowerGridPage.jsx";
import PowerGridValuePage from "./components/admin/PowerGridValuePage.jsx";
import MorpheusRamblingPage from "./components/admin/MorpheusRamblingPage.jsx";
import MorpheusAiSlop from "./components/public/MorpheusAiSlop.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const [allFinancial, setAllFinancial] = useState([]);
  const [allSocial, setAllSocial] = useState([]);
  const [allIdentity, setAllIdentity] = useState([]);
  const [allAiResponse, setAllAiResponse] = useState([]);
  const [allUser, setAllUser] = useState([]);
  const [allUserInfo, setAllUserInfo] = useState([]);

  const fetchUsersInfo = async () => {
    try {
      let response = await fetch(`http://localhost:8080/api/user_info/details`);
      let data = await response.json();
      console.log("Fetched user info JSON data:", data);

      let financials = [];
      let socials = [];
      let identities = [];
      let aiResponses = [];
      let users = [];
      let userInfos = [];

      data.forEach((userInfo) => {
        let user = new User(
          userInfo.user.id,
          userInfo.user.username,
          userInfo.user.password
        );

        let social = new Social(
          userInfo.social.id,
          userInfo.social.motherMaidenName,
          userInfo.social.fatherMiddleName,
          userInfo.social.firstVehicle,
          userInfo.social.numOfSiblings,
          userInfo.social.elementarySchool,
          userInfo.social.firstPetsName,
          userInfo.social.hasLinkedIn,
          userInfo.social.hasFaceBook,
          userInfo.social.hasInstagram,
          userInfo.social.hasTwitter,
          userInfo.social.hasTikTok,
          userInfo.social.hasSnapchat,
          userInfo.social.hasYouTube,
          userInfo.social.hasGithub
        );

        let financial = new Financial(
          userInfo.financial.id,
          userInfo.financial.bankName,
          userInfo.financial.creditScore,
          userInfo.financial.hasVenmo,
          userInfo.financial.hasCashApp,
          userInfo.financial.hasPaypal,
          userInfo.financial.hasCreditCard,
          userInfo.financial.hasCrypto
        );

        let identity = new Identity(
          userInfo.identity.id,
          userInfo.identity.firstName,
          userInfo.identity.lastName,
          userInfo.identity.address,
          userInfo.identity.zipCode,
          userInfo.identity.state,
          userInfo.identity.dob,
          userInfo.identity.phoneNumber,
          userInfo.identity.email,
          userInfo.identity.isRenting,
          userInfo.identity.hasSocialSecurityNumber,
          userInfo.identity.hasDriversLicence,
          userInfo.identity.hasPassport
        );

        let aiResponse = new AiResponse(
          userInfo.aiResponse.id,
          userInfo.aiResponse.identityResponse,
          userInfo.aiResponse.financialResponse,
          userInfo.aiResponse.socialResponse
        );

        userInfos.push({
          user,
          social,
          financial,
          identity,
          aiResponse,
        });

        users.push(user);
        financials.push(financial);
        socials.push(social);
        identities.push(identity);
        aiResponses.push(aiResponse);
      });

      setAllUser(users);
      setAllFinancial(financials);
      setAllSocial(socials);
      setAllIdentity(identities);
      setAllAiResponse(aiResponses);
      setAllUserInfo(userInfos);
    } catch (error) {
      console.error("Error fetching user info:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsersInfo();
  }, []);

  useEffect(() => {
    if (
      allFinancial.length > 0 &&
      allSocial.length > 0 &&
      allIdentity.length > 0 &&
      allAiResponse.length > 0 &&
      allUser.length > 0 &&
      allUserInfo.length > 0
    ) {
      setLoading(false);
    }
  }, [
    allFinancial,
    allSocial,
    allIdentity,
    allAiResponse,
    allUser,
    allUserInfo,
  ]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/log-in/returning" element={<LoginPageReturning />} />

          <Route path="/log-in/new-user" element={<LoginPageNew />} />
          <Route path="/log-in/new-user/form" element={<NewUserDataForm />} />
          <Route path="/PublicHomePage" element={<PublicHomePage />} />
          <Route path="/train-with-AiMorpheus" element={<MorpheusAiSlop />} />
          <Route path="/resources/AllResources" element={<ResourcesPage />} />

          <Route path="/admin" element={<AdminHomePage />} />
          <Route
            path="/power-grid"
            element={
              <PowerGridPage userinfo={allUserInfo} refetch={fetchUsersInfo} />
            }
          />
          <Route
            path="/power-grid/value"
            element={<PowerGridValuePage userinfo={allUserInfo} />}
          />
          <Route
            path="/AI-Morpheus"
            element={<MorpheusRamblingPage aiResponse={allAiResponse} />}
          />

          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Thank-you" element={<ThankYouPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
