import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TextBox from "../form-builders/TextBox.jsx";

const LoginPageNew = () => {
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Form submitted!");

    const newUser = {
      username,
      password,
    };

    try {
      const reponse = await fetch("http://localhost:8080/api/users/add", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data = await reponse.json();




      navigate("/log-in/new-user/form", { state: { userId: data.id } });
    } catch (error) {
      console.error("Error creating new user:", error);
    }
  };

  return (

    <main className = "background">
    <div className = "login-page-container">
    <div className="login-page-card">
      <h1>Hello {username}!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <TextBox
            id="username"
            label="Username:"
            value={username}
            handleChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <button onClick={() => navigate(-1)}>Back</button>
    </div>
    </div>
    </main>
  );
};

export default LoginPageNew;
