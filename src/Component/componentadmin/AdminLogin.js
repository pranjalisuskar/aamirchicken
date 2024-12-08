import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setsomethin,role}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");
  const [errors, setError] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const goToUrl = (url,rolexy) => {
    navigate(url);
    setrolex(rolexy)
  };
  const setrolex=(rolex)=>{
    setsomethin(rolex)
  }
  useEffect(() => {
    if (!role) {
      console.log("Role is not defined yet");
      return;
    }
  
    console.log("Role is defined:", role);
    if (url) {
      // navigate(url);
      goToUrl(url,role)
    }
  }, [role, url]);
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_Email: email,
          user_Password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.redirectUrl && data.user.role) {
          setrolex(data.user.role)
          setUrl(data.redirectUrl)
         
          // Redirect to admin dashboard
        }
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Error:", err);
    }
  };

  return (
    <div className="login-container" style={{ backgroundColor: "#9a292f" }}>
      <form
        className="login-form"
        onSubmit={handleSubmit}
        style={{
          width: "75%",
          maxWidth: "550px",
          margin: "30px",
        }}
      >
        {/* <h2 className="form-title"style={{color:"#9a292f",fontWeight:"bold"}}> Login</h2> */}
        <img
          src="/logo/logo.jpg"
          alt="Logo"
          className="logo"
          style={{ width: "80px", height: "50px", marginLeft:"40%",fontSize:"30%" }}
        />
        

        <div className="form-group" style={{ marginLeft: "20px" }}>
          <input
            style={{ fontWeight: "bold" }}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter Your Email"
          />
          {/* Display an error message if validation fails */}
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-group" style={{ marginLeft: "20px" }}>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter Your Password"
            style={{ marginLeft: "30px", fontWeight: "bold" }} // Inline styling for margin-left
          />
          {errors.password && (
            <span className="error-text">{errors.password}</span>
          )}
        </div>

        <button
          type="submit"
          className="submit-btn"
          style={{ backgroundColor: "#9a292f", marginLeft: "45px",fontWeight:"bold" }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
