import { Routes, Route, BrowserRouter } from "react-router-dom";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import "./App.css";
import AuditForm from "./components/cyber-audit/Audit.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import NavBar from "./pages/home-page/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./pages/home-page/Footer.jsx";
import CyberTraining from "./components/training-room/TrainingRoom.jsx";
import TrainingProgram from "./components/training-room/TrainingRoomProgram.jsx";
import ThankYouPage from "./pages/about-me/ThankYouPage.jsx";
import AdminHomePage from "./components/admin/AdminHomePage.jsx";
import PublicHomePage from "./components/public/PublicHomePage.jsx";
import UserHomePage from "./components/user/UserHomePage.jsx";
import LandingPage from "./components/landing-login/LandingPage.jsx";
import LoginPageNew from "./components/landing-login/LoginPageNew.jsx";
import LoginPageReturning from "./components/landing-login/LoginPageReturning.jsx";
import { useEffect, useState } from "react";
import { Financial, Social, Identity, AiResponse, User } from "./classes/exports.js";


function App() {

const [loading, setLoading] = useState(true);
const [loggedIn, setLoggedIn] = useState(false);

const[allFinancial, setAllFinancial] = useState([]);
const[allSocial, setAllSocial] = useState([]);
const[allIdentity, setAllIdentity] = useState([]);
const[allAiResponse, setAllAiResponse] = useState([]);
const[allUser, setAllUser] = useState([]);
const[allUserInfo, setAllUserInfo] = useState([]);


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

    data.forEach(userInfo => {
      let financial = new Financial(
        userInfo.financial.id,
        userInfo.financial.venmoHandle,
        userInfo.financial.cashAppHandle,
        userInfo.financial.paypalHandle,
        userInfo.financial.bankName,
        userInfo.financial.creditCardNum,
        userInfo.financial.bankAccountNum,
        userInfo.financial.cryptoHoldings
      );

      let social = new Social(
        userInfo.social.id,
        userInfo.social.motherMaidenName,
        userInfo.social.fatherMiddleName,
        userInfo.social.firstVehicle,
        userInfo.social.numOfSiblings,
        userInfo.social.elementarySchool,
        userInfo.social.firstPetsName,
        userInfo.social.linkedInProfile,
        userInfo.social.facebookProfile,
        userInfo.social.twitterProfile,
        userInfo.social.tiktokHandle,
        userInfo.social.snapchatProfile,
        userInfo.social.youtubeProfile
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
        userInfo.identity.driversLicenceNum,
        userInfo.identity.ssnLast4,
        userInfo.identity.passPortNum
      );

      let user = new User(
        userInfo.user.id,
        userInfo.user.username,
        userInfo.user.password
      );

      let aiResponse = new AiResponse(
        userInfo.aiResponse.id,
        userInfo.aiResponse.identityResponse,
        userInfo.aiResponse.financialResponse,
        userInfo.aiResponse.socialResponse
      );

      userInfos.push(userInfo);
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
    setAllUserInfo(data);

  } catch (error) {
    console.error("Error fetching user info:", error);
    setLoading(false);
  }
};

useEffect(() => {
		fetchUsersInfo();
  }, []);
		
	useEffect(() => {
    if (allFinancial.length > 0 &&
      allSocial.length > 0 &&
      allIdentity.length > 0 &&
      allAiResponse.length > 0 &&
      allUser.length > 0 &&
      allUserInfo.length > 0
    ) {
      setLoading(false);
    }
    }, [allFinancial, allSocial, allIdentity, allAiResponse, allUser, allUserInfo]);

   if (loading) {
    return <div>Loading...</div>;
  }




  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
         <Route path="/" element={<LandingPage/>} />
          <Route path="/public" element={<PublicHomePage />} />
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/user" element={<UserHomePage />} />
          <Route path="/log-in/returning" element={<LoginPageReturning />} />
          <Route path="/log-in/new-user" element={<LoginPageNew />} />
          <Route path="/resources/AllResources" element={<ResourcesPage />} />
          <Route path="/Audit" element={<AuditForm />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Training-Room" element={<CyberTraining />} />
          <Route
            path="/Training-Room/:programName"
            element={<TrainingProgram />}
          />
          <Route path="/Thank-you" element={<ThankYouPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}


export default App;
