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
              description="Find total megawatts of users"
              onClick={() => {
                console.log("Button clicked!");
                navigate("/power-grid");
              }}
            />
          </div>
          <div className="flex-items">
            <HomePageCard
              title="How much is a battery worth?"
              description="tie this to Darkweb things for sale using math"
              onClick={() => {
                console.log("Button clicked!");
                navigate("/Admin");
              }}
            />
            <HomePageCard
              title="Make a Human Battery"
              description="Gotta Keep the lights on!"
              onClick={() => {
                console.log("Button clicked!");
                navigate("/Admin");
              }}
            />
          </div>
          <div className="flex-items">
            <HomePageCard
              title="Modify Battery Farm"
              description="Add, remove, or change users"
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
