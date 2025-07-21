import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import "./App.css";
import AuditForm from "./component/cyber-audit/Audit.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import NavBar from "./pages/home-page/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./pages/home-page/Footer.jsx";
import CyberTraining from "./component/training-room/TrainingRoom.jsx";
import TrainingProgram from "./component/training-room/TrainingRoomProgram.jsx";
import ThankYouPage from "./pages/about-me/ThankYouPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
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
