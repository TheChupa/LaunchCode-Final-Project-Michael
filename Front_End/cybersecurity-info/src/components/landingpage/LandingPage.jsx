import { useNavigate } from "react-router-dom";
import HomePageCard from "../page-builders/HomePageCard";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="background">
        <div className="flex-container">
          <div className="flex-items">
            <HomePageCard
              title="Welcome to the Cyber Security Training Room
              "
            />
          </div>
          <div className="flex-items">
            <HomePageCard
              title="Returning User"
              description="Click to Login"
              onClick={() => {
                console.log("Button clicked!");
                navigate("/log-in/returning");
              }}
            />
            <HomePageCard
              title="New User"
              description="Click to Create Account"
              onClick={() => {
                console.log("Button clicked!");
                navigate("log-in/new-user");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
