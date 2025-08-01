import AiResponseCard from "../page-builders/AiResponseCard";

const MorpheusRamblingPage = (AiResponses) => {


    let MorpheusTeachings = AiResponses.aiResponse.map((response, index) => (
        <AiResponseCard key={index} aiResponse={response} />
    ));

  return (
    <div>
      <h1>Teachings of AI Morpheus</h1>
      <p>Observe to the teachings of AI Morpheus.</p>
      <div>{MorpheusTeachings}</div>    
    </div>
  );
};

export default MorpheusRamblingPage;
