import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

function Auth({ setAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (username === "admin" && password === "password") {
      localStorage.setItem("authenticated", "true");
      setAuthenticated(true);
      navigate("/gallery");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <section>
      {/* Animation spans */}
      {Array.from({ length: 200 }).map((_, i) => (
        <span key={i}></span>
      ))}

      {/* Login form */}
      <div className="signin">
        <div className="content">
          <h2>Sign In</h2>
          <div className="form">
            <div className="inputBox">
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <i>Username</i>
            </div>
            <div className="inputBox">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i>Password</i>
            </div>
            <div className="links">
              <a href="#">Forgot Password</a>
              <a href="#">Signup</a>
            </div>
            <div className="inputBox">
              <input
                type="submit"
                value="Login"
                onClick={login}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Auth;
