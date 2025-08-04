import { useState } from "react";
import "./AboutMe.css"; // Assuming you have a CSS file for styling

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
    const subject = encodeURIComponent("Message from About Me page");
    const body = encodeURIComponent(
      `Message: ${formData.textbox}\n\nFrom: ${formData.email}`
    );
    
    window.location.href = `mailto:rut-diploma-shaky@duck.com?subject=${subject}&body=${body}`;
    setFormData({ email: "", textbox: "" });
  };

  return (
    <main className="background">
      <div className="aboutme-flex-container">
        <div className="aboutme-section">
          <h1>Hello!</h1>
          <p className="">
            Help me find things to make life better.<br />
            Contact me if you have ideas.<br />
          
          </p>
        </div>

        {/* Profile Image */}
        

        {/* Contact Form */}
        <div className="aboutme-section">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Your Message:
              <textarea
                name="textbox"
                value={formData.textbox}
                onChange={handleChange}
                rows="5"
                placeholder="Send me cool ideas."
                required
              />
            </label>
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
            <button type="submit">Send</button>
          </form>
        </div>

        {/* Closing Message */}
        <div className="aboutme-section">
        
          <p>
                  
        
            I enjoy the internet very much, but we have to keep it in check.<br />
            Education is our best weapon for this.<br /><br />
            Don't let you or your loved ones become a victim of ignorance.
            <br /><br />
            
            <img className="dog-photo" src="/dallas.jpg" alt="dog photo" />
            <br></br><br></br>
            <strong>Stay safe.</strong><br />
            <strong>Stay informed.</strong>
          </p>
        
      </div>
      </div>
    </main>
  );
};

export default AboutMe;
