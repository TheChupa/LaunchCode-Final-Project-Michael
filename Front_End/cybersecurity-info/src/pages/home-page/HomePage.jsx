import { ReUsableButton } from "../../assets/utility";
import { Link } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
 const [userName, setUserName] = useState("");
 const [hideForm, setHideForm] = useState(false);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setHideForm(true);
  };
  const handleNameChange = () => {
    setHideForm(false)
  }

 
 
  return (
    <>
      <main className="homepage">

<div className="overlay" hidden ={hideForm}>
 <div className="username-box">
 <form onSubmit={handleSubmit}>
            <label>
              Please enter a User Name.
              <input
                type="text"
                name="name"
                value={userName}
                onChange={handleChange}
                placeholder=""
               maxLength={20}
                required
              />
              <button className="welcome-button">Welcome</button>
            </label>
            <br />
            </form>

</div>
</div>



        <div className="intro-to-home">
          <h2>
            {" "}
            When's the last time you checked on <b>your</b> online identity, <b><span>{userName}</span></b> ?
          </h2>
          <br />
          <h3> Was it yesterday?</h3>
          <br />
          <br /> Was it last week? <br /> has it been..............{" "}
          <span className="homepage-blink">
            <b>Never?</b>
          </span>{" "}
          <br />
          <br />
          <br />
          Maybe it's time to perform a little self-checkup. <br />
          <br />
        </div>
        <div className="lead-to-buttons-homepage">
          There is nothing to fear, but there are some things you should know.
          Press either button. Each one will take you on a journey. One of them is not fun at all.
          <br/>
          <br/>Choose your journey, {userName}. Please take the hard path. Be couragous.
          <br/>
          <br/>
          <br/>
          <button className="change-button" onClick={handleNameChange}>Change Username before you go?</button>
          <span className="blue-button-homepage">
            <ReUsableButton
              path="/resources/AllResources"
              name="Easy Journey"
            />
          </span>
          <span className="red-button-homepage">
            {" "}
            <ReUsableButton path="/Audit" name="Hard Journey" />
          </span>
        </div>
      </main>
    </>
  );
};

export default HomePage;
