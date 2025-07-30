import { ReUsableButton } from "../../assets/utility";
import {
  Link,
  Navigate,
  UNSAFE_createClientRoutesWithHMRRevalidationOptOut,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import ScamInfoBox from "../../components/training-room/ScamInfoBox";
import HomePageCard from "../page-builders/HomePageCard";

const UserHomePage = () => {
  const [userName, setUserName] = useState("");
  const [hideForm, setHideForm] = useState(false);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setHideForm(true);
  };
  const handleNameChange = () => {
    setHideForm(false);
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="background">
        <div className="flex-container">
          <div className="flex-items">
            <HomePageCard
              title="Click to Login"
              description="Welcome New and Returning Users"
              onClick={() => {
                console.log("Button clicked!");
                navigate("/resources/AllResources");
              }}
            />
          </div>
          <div className="flex-items">
            <HomePageCard
              title="AICyber Security Audit"
              description="Enter"
              onClick={() => {
                console.log("Button clicked!");
                navigate("/Audit");
              }}
            />
            <HomePageCard
              title="I'm here to learn on my own."
              description=""
              onClick={() => {
                console.log("Button clicked!");
                navigate("/Audit");
              }}
            />
          </div>
          <div className="flex-items">
            <HomePageCard
              title="Training Room"
              description="Train with Morpheus"
              onClick={() => {
                console.log("Button clicked!");
                navigate("/Audit");
              }}
            />
            <HomePageCard
              title="Contact the Creator"
              onClick={() => {
                console.log("Button clicked!");
                navigate("/Audit");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHomePage;
