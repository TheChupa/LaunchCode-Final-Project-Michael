import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForAuditForm() {
  //form to take in data. updates as the user types into the form
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    maidenName: "",
    petsName: "",
    zodiac: "",
    bestfriend: "",
    ss: "",
    childhoodaddress: "",
    firstvehicle: "",
    siblings: "",
    mailing: "",
    phonenumber: "",
  });
  //button that takes us from the audit to the training room. has a 3 second delay so users can stare at blinking text
  const navigate = useNavigate();
  const handleNavigation = () => {
    setTimeout(() => {
      navigate("/Training-Room");
    }, 3000);
  };
  const [hideForm, setHideForm] = useState(false);
  const [hideButton, setHideButton] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setHideForm(true);
    setHideButton(false);
  };

  return (
    <main className="cyber-audit">
      <div>
        <div
          style={{ textAlign: "center", marginTop: "20px" }}
          hidden={hideForm}
        >
          <h1>Cybersecurity Audit</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Favorite username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Phone Number:
              <input
                type="number"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
                maxLength={10}
                required
              />
            </label>
            <br />
            <label>
              Mother's Maiden Name:
              <input
                type="text"
                name="maidenName"
                value={formData.maidenName}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              First Pet's Name:
              <input
                type="text"
                name="petsName"
                value={formData.petsname}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Zodiac sign:
              <input
                type="text"
                name="zodiac"
                value={formData.zodiac}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Mailing Address:
              <input
                type="text"
                name="mailing"
                value={formData.mailing}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Number of siblings:
              <input
                type="number"
                name="siblings"
                value={formData.siblings}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              First Vehicle:
              <input
                type="text"
                name="firstvehicle"
                value={formData.firstvehicle}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Last 4 of SS#:
              <input
                type="number"
                name="ss"
                value={formData.ss}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Street of childhood home:
              <input
                type="text"
                name="childhoodaddress"
                value={formData.childhoodaddress}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Name of Best friend from childhood:
              <input
                type="text"
                name="bestfriend"
                value={formData.bestfriend}
                onChange={handleChange}
                required
              />
              <br />
            </label>
            <br />
            <input type="submit" />
          </form>
        </div>

        <div className="table-div" hidden={hideButton}>
          <table border="1">
            <thead>
              <tr>
                <th>DataPoint</th>
                <th>This is What you Shared</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name:</td>
                <td className="table-blink">{formData.name}</td>
              </tr>
              <tr>
                <td>Username:</td>
                <td className="table-blink">{formData.username}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td className="table-blink">{formData.email}</td>
              </tr>
              <tr>
                <td>Pet's Name:</td>
                <td className="table-blink">{formData.petsName}</td>
              </tr>
              <tr>
                <td>Zodiac Sign:</td>
                <td className="table-blink">{formData.zodiac}</td>
              </tr>
              <tr>
                <td>Best Friend:</td>
                <td className="table-blink">{formData.bestfriend}</td>
              </tr>
              <tr>
                <td>SSN:</td>
                <td className="table-blink">{formData.ss}</td>
              </tr>
              <tr>
                <td>Childhood Address:</td>
                <td className="table-blink">{formData.childhoodaddress}</td>
              </tr>
              <tr>
                <td>First Vehicle:</td>
                <td className="table-blink">{formData.firstvehicle}</td>
              </tr>
              <tr>
                <td>Siblings:</td>
                <td className="table-blink">{formData.siblings}</td>
              </tr>
              <tr>
                <td>Mailing Address:</td>
                <td className="table-blink">{formData.mailing}</td>
              </tr>
              <tr>
                <td>Phone Number:</td>
                <td className="table-blink">{formData.phonenumber}</td>
              </tr>
            </tbody>
          </table>

          <br />
          <br />
          <h3>Do you realize what you've done?!?!</h3>

          <br />
          <br />
          <button onClick={handleNavigation} hidden={hideButton}>
            Did you really mean to share all of this with a stranger?
          </button>
        </div>
      </div>
    </main>
  );
}

export default ForAuditForm;
