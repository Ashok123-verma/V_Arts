import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/auth";
import Gallery from "./components/gallery";
import Navbar from "./components/navbar";
import "./styles/global.css";
import "./styles/auth.css";
import "./styles/gallery.css";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [theme, setTheme] = useState("light");

  // Check for authentication status in localStorage
  useEffect(() => {
    if (localStorage.getItem("authenticated")) {
      setAuthenticated(true);
    }
  }, []);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    setAuthenticated(false);
  };

  return (
    <div className={theme}>
      <Router>
        <Navbar
          authenticated={authenticated}
          toggleTheme={toggleTheme}
          handleLogout={handleLogout}
        />
        <Routes>
          <Route
            path="/login"
            element={
              authenticated ? <Navigate to="/gallery" /> : <Auth setAuthenticated={setAuthenticated} />
            }
          />
          <Route
            path="/gallery"
            element={authenticated ? <Gallery /> : <Navigate to="/login" />}
          />
          <Route
            path="/"
            element={<Navigate to={authenticated ? "/gallery" : "/login"} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
