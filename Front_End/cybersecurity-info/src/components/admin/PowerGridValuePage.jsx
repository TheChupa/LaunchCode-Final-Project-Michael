import BatteryCard from "../page-builders/BatteryCard";

const PowerGridValuePage = ({ userinfo }) => {

  const totalSystemWorth = userinfo.reduce((sum, user) => {
    const social = user.social.worthHowMuch() || 0;
    const financial = user.financial.worthHowMuch() || 0;
    const identity = user.identity.worthHowMuch() || 0;
    return sum + social + financial + identity;
  }, 0);
 
  let powerGridCells = userinfo.map((user) => (
    <BatteryCard key={user.user.id} userinfo={user} />
  ));

  return (
   <div className = "background">
   <div className = "power-grid-header">
      <h2>Power Grid Value Page</h2>
      <p>Total System Worth: ${totalSystemWorth}</p>
      <p>Here you can see the total worth of each battery based on their social, financial, and identity data.</p>
    </div>
    <div
    style= {{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "16px",  
      justifyItems: "center",
    }}>
      {powerGridCells}
    </div>
    </div>
    
  );
};

export default PowerGridValuePage;
