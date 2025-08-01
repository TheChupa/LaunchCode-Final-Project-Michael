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
              title="How much is a battery worth?"
              onClick={() => {
                navigate("/power-grid/value");
              }}
            />
            <HomePageCard
              title="Teachings of AI Morpheus"
              description="!"
              onClick={() => {
                navigate("/AI-Morpheus");
              }}
            />
          </div>
          <div className="flex-items">
            <HomePageCard
              title="Modify Power Grid"
              onClick={() => {
                navigate("/power-grid");
              }}
            />
            <HomePageCard
              title="Power Off"
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
