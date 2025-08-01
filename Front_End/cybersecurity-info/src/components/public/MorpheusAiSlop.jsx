import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


const MorpheusAiSlop = () => {
  const location = useLocation();
  const { userId } = location.state || {};
  const [showInfo, setShowInfo] = useState(false);
  const [aiInfo, setAiInfo] = useState(null);

  useEffect(() => {
    if (!showInfo || !userId) return;

    const fetchAiInfo = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/ai-response/${userId}/all`);
        const data = await res.json();
        setAiInfo(data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchAiInfo();
  }, [showInfo, userId]);

  return (
    <div className="morpheus-container">
      <h1>Welcome to AI Morpheus Training!</h1>
      <p>Your user ID is: {userId}</p>

      <img
        src="/AI_Morpheus_Slop.png"
        alt="Morpheus AI"
        className="morpheus-image"
        onClick={() => setShowInfo(true)}
      />

      {showInfo && aiInfo && (
        <div className="ai-info">
          <h2>Morpheus AI's Advice</h2>
          <p><strong>Financial:</strong> {aiInfo.aiResponse?.financialResponse}</p>
          <p><strong>Social:</strong> {aiInfo.aiResponse?.socialResponse}</p>
          <p><strong>Identity:</strong> {aiInfo.aiResponse?.identityResponse}</p>
        </div>
      )}
    </div>
  );
};

export default MorpheusAiSlop;