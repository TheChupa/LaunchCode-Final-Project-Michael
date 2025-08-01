import {  useState } from "react";

const BatteryCard = ({ userinfo }) => {

    const [revealed, setRevealed] = useState(false);


    let socialWorth = userinfo.social?.worthHowMuch?.() || 0;
    let financialWorth = userinfo.financial?.worthHowMuch?.() || 0;
    let identityWorth = userinfo.identity?.worthHowMuch?.() || 0; 
    let totalWorth = socialWorth + financialWorth + identityWorth;
    let name = (userinfo.identity?.firstName || "") + " " + (userinfo.identity?.lastName || "Unknown User");
    
return (
    <div className = "power-grid-cell-container">
    <div className ="power-grid-cell"
      
      onClick={() => setRevealed((r) => !r)}
    >
      {!revealed ? (
        <img
          src="/batteryCard.png"
          alt={name.trim()}
        />
      ) : (
        <div className = "power-grid-cell-content">
          <h3>{name.trim()}</h3>
          <p>${totalWorth}</p>
        </div>
      )}
    </div>
    </div>
  );
};


  export default BatteryCard;