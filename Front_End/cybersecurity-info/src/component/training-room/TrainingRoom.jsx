import { useState } from "react";
import { scamdata } from "../../assets/dataforproject";
import { useNavigate } from "react-router-dom";

const CyberTraining = () => {
  const [selectedProgram, setSelectedProgram] = useState("");
  //navigate button combined with submit, or else I would of used the reUsable one.
  const navigate = useNavigate();
  // finds key in the object
  const scams = Object.keys(scamdata);
  const handleChange = (event) => {
    setSelectedProgram(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedProgram) {
      navigate(`/Training-Room/${selectedProgram}`);
    }
  };

  //returns the list of scams I have into a dropdown. Then the select takes you to selected program.

  const scamsList = scams.map((scam, index) => {
    return (
      <option key={index} value={scam}>
        {scam}
      </option>
    );
  });

  return (
    <main className="training-room">
      <div className="dropdown">
        <h1>Welcome to the Dojo</h1>
        <form onSubmit={handleSubmit}>
          <label>Time to Plug in------Boot up-----</label>
          <select value={selectedProgram} onChange={handleChange}>
            <option value="">Please choose a module</option>
            {scamsList}
          </select>

          <button type="submit"> Run {selectedProgram}</button>
        </form>
      </div>

      <br />
      <img
        className="training-gif"
        src="/trainingdropdown.gif"
        alt="neo learning"
      ></img>
    </main>
  );
};

export default CyberTraining;
