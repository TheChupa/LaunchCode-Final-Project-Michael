import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const MorpheusAiSlop = () => {
  const location = useLocation();
  const { userId } = location.state || {};
  const [showInfo, setShowInfo] = useState(false);
  const [aiInfo, setAiInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!showInfo || !userId) return;

    const fetchAiInfo = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/ai-responses/${userId}/all`);
        const data = await res.json();


        console.log("Fetched AI info:", data);
        setAiInfo(data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchAiInfo();
  }, [showInfo, userId]);

  return (
    <main className ="background">
    <div className="main-content">
    <div className="power-grid-header">
      <h1>Welcome to AI Morpheus Training!</h1>
      <p>Your user ID is: {userId}</p>
      <p>Click on the image below to see AI Morpheus' responses to your data.</p>
      </div>
      
      <div>
        <div className="morpheus-card matrix-shimmer">
      <img
        src="/AI_Morpheus_Slop.png"
        alt="Morpheus AI"
        className="morpheus-image"
        onClick={() => setShowInfo(true)}
      />
      </div>

      {showInfo && aiInfo && (
        <>
          <div className="grouping-box">
          <p><strong>Financial:</strong> {aiInfo.financialResponse}</p>
          </div>
          <div className="grouping-box">
          <p><strong>Social:</strong> {aiInfo.socialResponse}</p>
          </div>
          <div className="grouping-box">
          <p><strong>Identity:</strong> {aiInfo.identityResponse}</p>
          <button onClick={() => navigate("/PublicHomePage", { state: { userId } })}>Go Back</button>
          </div>
      </>
      )}
      </div>
      </div>
    </main>
  );
};

export default MorpheusAiSlop;