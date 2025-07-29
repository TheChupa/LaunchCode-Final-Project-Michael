import { useNavigate } from "react-router-dom";

const LoginPageNew = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Form submitted!");
    navigate("/user");
  };

  return (
    <div className="login-page">
      <h1>Welcome Back!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPageNew;