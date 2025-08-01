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
              title="View Power Grid"
              description=""
              onClick={() => {
                console.log("Button clicked!");
                navigate("/power-grid");
              }}
            />
          </div>
          <div className="flex-items">
            <HomePageCard
              title="How much is a battery worth?"
              onClick={() => {
                console.log("Button clicked!");
                navigate("/power-grid/value");
              }}
            />
            <HomePageCard
              title="Teachings of AI Morpheus"
              description="!"
              onClick={() => {
                console.log("Button clicked!");
                navigate("/AI-Morpheus");
              }}
            />
          </div>
          <div className="flex-items">
            <HomePageCard
              title="Modify Power Grid"
              onClick={() => {
                console.log("Button clicked!");
                navigate("/Admin");
              }}
            />
            <HomePageCard
              title="Power Off."
              description={""}
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

export default AdminHomePage;
