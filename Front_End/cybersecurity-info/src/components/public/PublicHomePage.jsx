import { useLocation, useNavigate } from "react-router-dom";
import HomePageCard from "../page-builders/HomePageCard";

const PublicHomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract userId from location state
  // If userId is not found, it will be undefined 

  const { userId } = location.state || {};
  console.log("User ID from location state:", userId);

  return (
    <>
      <div className="background">
        <div className="flex-container">
          <div className="flex-items">
            <HomePageCard
              title="Welcome your user_info id is:"
              description={userId}
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
                navigate("/train-with-AiMorpheus", { state: { userId } });
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
