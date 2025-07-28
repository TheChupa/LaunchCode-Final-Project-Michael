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
              title="View Power Grid"
              description="Find total megawatts of users"
              onClick={() => {
                console.log("Button clicked!");
                navigate("/resources/AllResources");
              }}
            />
          </div>
          <div className="flex-items">
            <HomePageCard
              title="How much is a battery worth?"
              description="tie this to Darkweb things for sale using math"
              onClick={() => {
                console.log("Button clicked!");
                navigate("/Audit");
              }}
            />
            <HomePageCard
              title="Make a Human Battery"
              description="Gotta Keep the lights on!"
              onClick={() => {
                console.log("Button clicked!");
                navigate("/Audit");
              }}
            />
          </div>
          <div className="flex-items">
            <HomePageCard
              title="Modify Battery Farm"
              description="Add, remove, or change users"
              onClick={() => {
                console.log("Button clicked!");
                navigate("/Audit");
              }}
            />
            <HomePageCard
              title="Power Off."
              description={""}
              onClick={() => {
                console.log("Button clicked!");
                navigate("/Audit");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicHomePage;
