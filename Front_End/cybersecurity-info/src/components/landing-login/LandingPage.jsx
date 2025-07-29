import { useNavigate } from "react-router-dom";
import HomePageCard from "../homepage/HomePageCard";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="background">
        <div className="flex-container">
          <div className="flex-items">
            <HomePageCard
              title="Returning User Login"
              description=""
              onClick={() => {
                console.log("Button clicked!");
                navigate("/log-in/returning");
              }}
            />
          </div>
          <div className="flex-items">
             <HomePageCard
              title="New User Login"
              description=""
              onClick={() => {
                console.log("Button clicked!");
                navigate("/log-in/new-user");
              }}
            />
            <HomePageCard
              title="Anonymous User"
              description=""
              onClick={() => {
                console.log("Button clicked!");
                navigate("/Public");
              }}
            />
          </div>
          <div className="flex-items">
            <HomePageCard
              title="Learn more about the Creator"
              description=""
              onClick={() => {
                console.log("Button clicked!");
                navigate("/AboutMe");
              }}
            />
            <HomePageCard
              title="Find more Resources"
              description=""
              onClick={() => {
                console.log("Button clicked!");
                navigate("/resources/AllResources");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;