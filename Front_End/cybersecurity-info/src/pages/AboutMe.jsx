import { useState } from "react";

import { ReUsableButton } from "../assets/utility";

const AboutMe = () => {
  const [formData, setFormData] = useState({
    email: "",
    textbox: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ email: "", textbox: "" });
  };

  return (
    <main className="about-me">
      <div className="text-about-me">
        <h1>Hello!</h1>
        <h3>
          Help me find things to make life better. Contact me if you have ideas.
          Hope you enjoy Dallas!
        </h3>

        <img className="dog-photo" src="/dallas.jpg" alt="dog photo"></img>
      </div>

      <div className="form-about-me">
        <form onSubmit={handleSubmit}>
          <label>
            Your Message:
            <textarea
              name="textbox"
              value={formData.textbox}
              onChange={handleChange}
              rows="6"
              cols="40"
              placeholder="Send me cool ideas."
              required
            />
          </label>
          <br />
          <br />

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </label>
          <br />
          <br />

          <ReUsableButton path="/Thank-you " name="submit" type="submit" />
        </form>
      </div>

      <p className="closer-about-me">
        I enjoy the internet very much, but we have to keep it in check.
        Education is our best weapon for this. <br />
        <br />
        Don't let you or your loved ones become a victim of ignorance.
      </p>
    </main>
  );
};
export default AboutMe;
