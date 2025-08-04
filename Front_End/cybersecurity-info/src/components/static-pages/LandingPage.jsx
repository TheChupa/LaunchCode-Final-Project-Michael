import { useNavigate } from "react-router-dom";
import HomePageCard from "../page-builders/HomePageCard";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="background">
        <div className="flex-container">
          <div className="flex-items">
            <HomePageCard
              title="CyberSecurity Training"
              
            />
          </div>
          <div className="flex-items">
            <HomePageCard
            className="matrix-shimmer"
              title="Returning User"
              description="Click to Login"
              onClick={() => {
                navigate("/log-in/returning");
              }}
            />
            <HomePageCard
              className="matrix-shimmer"
            
              title="New User"
              description="Click to Create Account"
              onClick={() => {
                navigate("log-in/new-user");
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
