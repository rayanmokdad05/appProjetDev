import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <div className="text">Username</div>
          <input type="text" />
          <div className="input">
            <div className="text">Email</div>
            <input type="email" />
            <div className="text">Password</div>
            <input type="password" />
          </div>
        </div>
      </div>
      <div className="forgot-password">
        Lost Password? <span>Click here!</span>
      </div>
      <div className="submit-container">
        <div className="submit">Sign up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  );
};

export default Login;
