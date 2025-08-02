import { useNavigate } from "react-router-dom";
import HomePageCard from "../page-builders/HomePageCard";

const AdminHomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="background">
        <div className="flex-container">
          <div className="flex-items">
            <HomePageCard
              title="Admin Page"
              description=""
            
            />
          </div>
          <div className="flex-items">
            <HomePageCard
              title="Check Power Grid"
              className="matrix-shimmer"
              shimmerImage="power-grid-value.gif"
              onClick={() => {
                navigate("/power-grid/value");
              }}
            />
            <HomePageCard
              title="Teachings of AI Morpheus"
              description="!"
              className="matrix-shimmer"
              shimmerImage="mastered-morpheus-teachings.gif"
              onClick={() => {
                navigate("/AI-Morpheus");
              }}
            />
          </div>
          <div className="flex-items">
            <HomePageCard
              title="Modify Power Grid"
              className="matrix-shimmer"
              shimmerImage="neo-glasses-matrixtext.gif"
              onClick={() => {
                navigate("/power-grid");
              }}
            />
            <HomePageCard
              title="Power Off"
              className="matrix-shimmer"
              shimmerImage="logout-admin.gif"
              description={""}
              onClick={() => {               
                navigate("/");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHomePage;
