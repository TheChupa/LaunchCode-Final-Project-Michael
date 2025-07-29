import { useNavigate } from "react-router-dom";
import HomePageCard from "../homepage/HomePageCard";

const PublicHomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="background">
        <div className="flex-container">
          <div className="flex-items">
            <HomePageCard
              title="Audit my Digital Footprint"
              description="Enter at your own risk!"
              onClick={() => {
                console.log("Button clicked!");
                navigate("/resources/AllResources");
              }}
            />
          </div>
          <div className="flex-items">
             <HomePageCard
              title="Train with AI Morpheus"
              description="Gotta Keep the lights on!"
              onClick={() => {
                console.log("Button clicked!");
                navigate("/Audit");
              }}
            />
            <HomePageCard
              title="Learn more about Cyber Threats"
              description=""
              onClick={() => {
                console.log("Button clicked!");
                navigate("/resources/AllResources");
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
              title="Power Off."
              description={"Log-Out"}
              onClick={() => {
                console.log("Button clicked!");
                navigate("/");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicHomePage;
