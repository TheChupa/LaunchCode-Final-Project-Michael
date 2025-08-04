import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPageReturning = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log("Username:", username);

    if (username === "admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <main className="background">
    <div className= "login-page-container">
    <div className="login-page-card">
      <h1>Welcome Back!</h1>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUserName(e.target.value)}
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

export default LoginPageReturning;