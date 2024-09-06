import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Sign Up" && (
          <div className="signup-inputs">
            <div className="input">
              <div className="text">Username</div>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input">
              <div className="text">Email</div>
              <input type="email" placeholder="Email Id" />
            </div>
            <div className="input">
              <div className="text">Password</div>
              <input type="password" placeholder="Password" />
            </div>
          </div>
        )}
        {action === "Login" && (
          <div className="login-inputs">
            <div className="input">
              <div className="text">Username</div>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input">
              <div className="text">Password</div>
              <input type="password" placeholder="Password" />
            </div>
          </div>
        )}
      </div>
      <div className="forgot-password">
        Lost Password? <span>Click here!</span>
      </div>
      <div className="submit-container">
        <div
          className={`submit ${action === "Sign Up" ? "active" : ""}`}
          onClick={() => setAction("Sign Up")}
        >
          Sign up
        </div>
        <div
          className={`submit ${action === "Login" ? "active" : ""}`}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
