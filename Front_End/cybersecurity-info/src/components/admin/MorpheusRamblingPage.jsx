import AiResponseCard from "../page-builders/AiResponseCard";

const MorpheusRamblingPage = (AiResponses) => {


    let MorpheusTeachings = AiResponses.aiResponse.map((response, index) => (
        <AiResponseCard key={index} aiResponse={response} />
    ));

  return (
    <div className="background">
    <div className="main-content">
    <div className="power-grid-header">
      <h1>Teachings of AI Morpheus</h1>
      <p>Observe to the teachings of AI Morpheus.</p>
      </div>
      <div>{MorpheusTeachings}</div>   
      </div> 
    </div>
  );
};

export default MorpheusRamblingPage;
