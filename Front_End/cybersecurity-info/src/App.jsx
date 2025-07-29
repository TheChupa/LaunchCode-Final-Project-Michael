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

function App() {
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
