import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  // State for form fields and validation errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setError] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  // Handle form submission

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let formErrors = { email: '', password: '' };

//     // Basic validation for email and password
//     if (!email) {
//       formErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       formErrors.email = 'Email is invalid';
//     }

//     if (!password) {
//       formErrors.password = 'Password is required';
//     } else if (password.length < 6) {
//       formErrors.password = 'Password must be at least 6 characters';
//     }

//     setErrors(formErrors);

//     // If no errors, handle login logic here (e.g., call API)
//     if (!formErrors.email && !formErrors.password) {
//       alert('Login successful');
//       navigate('/dash');
//     }
//   };

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
        if (data.redirectUrl) {
          navigate(data.redirectUrl); // Redirect to admin dashboard
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
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Login</h2>

        <div className="form-group">
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter your email"
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter your password"
          />
          {errors.password && <span className="error-text">{errors.password}</span>}
        </div>

        <button type="submit" className="submit-btn" style={{backgroundColor:"#9a292f"}}>Login</button>
      </form>
    </div>
  );
};

export default Login;
