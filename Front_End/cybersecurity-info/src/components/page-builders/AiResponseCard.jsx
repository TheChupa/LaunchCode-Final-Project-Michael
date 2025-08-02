import { useNavigate } from "react-router-dom";

const AiResponseCard = ({ aiResponse }) => {
  const navigate = useNavigate();

  return (
    <div className="ai-response-card">
      <h3>AI Morpheus says:</h3>
      <p><strong>Identity:</strong> {aiResponse.identityResponse}</p>
      <p><strong>Financial:</strong> {aiResponse.financialResponse}</p>
      <p><strong>Social:</strong> {aiResponse.socialResponse}</p>
      <button onClick={() => navigate("/Admin")}>Go Back</button>
    </div>
  );
};


export default AiResponseCard;