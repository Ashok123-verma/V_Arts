import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/auth";
import Gallery from "./components/gallery";
import About from "./components/about"; // Import About component
import Contact from "./components/contact"; // Import Contact component
import Navbar from "./components/navbar";
import "./styles/global.css";
import "./styles/auth.css";
import "./styles/gallery.css";
import "./styles/about.css";
import "./styles/contact.css";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [theme, setTheme] = useState("dark");

  // Check authentication on initial render
  useEffect(() => {
    const authStatus = localStorage.getItem("authenticated");
    if (authStatus === "true") {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
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
              authenticated ? (
                <Navigate to="/gallery" replace />
              ) : (
                <Auth setAuthenticated={setAuthenticated} />
              )
            }
          />
          <Route
            path="/gallery"
            element={
              authenticated ? <Gallery /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/about"
            element={
              authenticated ? <About /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/contact"
            element={
              authenticated ? <Contact /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/"
            element={
              authenticated ? (
                <Navigate to="/gallery" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
