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

      const createdUser = await reponse.json();
      const userId = createdUser.id;
      navigate("/log-in/new-user/form", { state: { userId } });
    } catch (error) {
      console.error("Error creating new user:", error);
    }
  };

  return (
    <div className="login-page">
      <h1>Welcome Back!</h1>
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
    </div>
  );
};

export default LoginPageNew;
