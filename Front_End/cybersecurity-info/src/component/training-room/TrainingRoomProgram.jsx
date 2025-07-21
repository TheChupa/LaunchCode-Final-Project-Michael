import { useParams } from "react-router-dom";
import { scamdata } from "../../assets/dataforproject";
import ScamInfoBox from "./ScamInfoBox";
import { useState } from "react";
import { ReUsableButton } from "../../assets/utility";

const TrainingProgram = () => {
  // takes in data from dropdown and takes use to here. Use button to increase ClickCount to reveal certain sections.
  const { programName } = useParams();

  // scamdata
  const scam = scamdata[programName];
  const [clickCount, setClickCount] = useState(0);
  const handlePositiveClick = () => {
    setClickCount((prev) => prev + 1);
  };
  const handleNegativeClick = () => {
    setClickCount((prev) => prev - 1);
  };

  if (!scam) {
    return (
      <div className="error">
        You do not possess the ability to break out of the Matrix yet.
      </div>
    );
  }

  return (
    <main className="dojo">
      <div className="scamtype">
        <span className="scam-1" hidden={clickCount !== 1}>
          <ScamInfoBox scamKey="Type of Scam:" writeUp={scam.scamType} />
        </span>
        <span className="scam-1" hidden={clickCount !== 2}>
          <ScamInfoBox
            scamKey="This kind of data on you make this scam easier to accomplish:"
            writeUp={scam.dataPoints}
          />
        </span>
        <span className="scam-1" hidden={clickCount !== 3}>
          <ScamInfoBox
            scamKey="The attacker(s) gathered this data from:"
            writeUp={scam.breachType}
          />
        </span>
        <span className="scam-1" hidden={clickCount !== 4}>
          <ScamInfoBox
            scamKey="Attacker's main target(s):"
            writeUp={scam.mainTargets}
          />
        </span>
        <span className="scam-1" hidden={clickCount !== 5}>
          <ScamInfoBox scamKey="Defend yourself!" writeUp={scam.howToDefend} />
        </span>
        <span className="scam-1" hidden={clickCount !== 6}>
          <ScamInfoBox scamKey="More Details:" writeUp={scam.details} />
        </span>
        <span className="scam-1" hidden={clickCount !== 7}>
          <ScamInfoBox
            scamKey="Curiosity Killed the cat...."
            writeUp={scam.kindOfCurious}
          />
        </span>
        <span className="scam-1" hidden={clickCount !== 8}>
          <ScamInfoBox
            scamKey="I can see you really want to learn, here you go:"
            writeUp={scam.moreDetailsOne}
          />
        </span>
        <span className="scam-1" hidden={clickCount !== 9}>
          <ScamInfoBox
            scamKey="You are now a master"
            writeUp={scam.wayTooManyDetails}
          />
        </span>
        <span className="scam-1" hidden={clickCount !== 10}>
          <ScamInfoBox
            scamKey="Now for the sad stuff."
            writeUp={scam.theRealDarkness}
          />
        </span>

        <button
          className="button-box"
          hidden={!(clickCount >= 0 && clickCount <= 7)}
          onClick={handlePositiveClick}
        >
          Teach Me.
        </button>
        <button
          className="button-box"
          hidden={!(clickCount >= 7 && clickCount <= 10)}
          onClick={handlePositiveClick}
        >
          The dedication to your craft is admirable
        </button>
        <span hidden={clickCount <= 10}>
          <ReUsableButton
            className="button-box"
            path="/Training-Room"
            name="Take me Back to the Dojo"
          />
        </span>

        <img
          hidden={clickCount <= 10}
          className="iknowkungfu"
          src="/iknowkungfu.gif"
          alt="neo trained"
        ></img>
      </div>
    </main>
  );
};

export default TrainingProgram;
