const ScamInfoBox = ({ scamKey, writeUp }) => {
 
 //component for training room to display info 
 
  return (
    <main className="scam-info">
      <div className="info-card">
        <h4>{scamKey}</h4>
        <br />
        <br />
        <h6>{writeUp}</h6>
      </div>
    </main>
  );
};
export default ScamInfoBox;
