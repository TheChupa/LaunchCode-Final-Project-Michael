import { useLocation, useNavigate } from "react-router-dom";
import HomePageCard from "../page-builders/HomePageCard";

const PublicHomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract userId from location state
  // If userId is not found, it will be undefined 

  const { userId } = location.state || {};
  

  return (
    <>
      <main className="background">
        <div className="flex-container">
          <div className="flex-items">
            <HomePageCard
              title="Welcome!"
              description="Explore the world of AI SLop CyberSecurity Training"
              onClick={() => {
                navigate("/resources/AllResources");
              }}
            />
          </div>
          <div className="flex-items">
            <HomePageCard
              title="Train with AI Morpheus"
              description=""
              className="matrix-shimmer"
              shimmerImage="morpheus_training.gif"
              onClick={() => {
                navigate("/train-with-AiMorpheus", { state: { userId } });
              }}
            />
            <HomePageCard
              title="Curated CyberThreat Resources"
              description="Human compiled"
              className="matrix-shimmer"
              shimmerImage="red-pill-button.gif"
              onClick={() => {
                navigate("/resources/AllResources");
              }}
            />
          </div>
          <div className="flex-items">
            <HomePageCard
              title="Learn more about the Creator"
              className="matrix-shimmer"
              shimmerImage="Creator_button.gif"
              description="I'm real, I promise!"
              onClick={() => {
                navigate("/AboutMe");
              }}
            />
            <HomePageCard
              title="Power Off."
              description={"Log-Out"}
              className="matrix-shimmer"
              shimmerImage="logout-button.gif"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default PublicHomePage;
