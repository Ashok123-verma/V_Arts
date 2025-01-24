import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/auth";
import Gallery from "./components/gallery";
import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Sidebar from "./components/Sidebar";
import "./styles/global.css";
import Dashboard from "./components/Dashboard";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [theme, setTheme] = useState("dark");

  // Load theme and auth status on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);

    const authStatus = localStorage.getItem("authenticated");
    setAuthenticated(authStatus === "true");
  }, []);

  // Toggle between themes and persist to localStorage
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    setAuthenticated(false);
  };

  // ProtectedRoute Component
  const ProtectedRoute = ({ children }) => {
    return authenticated ? children : <Navigate to="/login" replace />;
  };

  return (
    <div className={theme}>
      <Router>
        {/* Navbar is always visible */}
        <Navbar
          authenticated={authenticated}
          toggleTheme={toggleTheme}
          handleLogout={handleLogout}
        />

        {/* Sidebar is visible only for logged-in users */}
        {authenticated && <Sidebar />}

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
              <ProtectedRoute>
                <Gallery />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
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
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
