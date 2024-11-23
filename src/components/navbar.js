import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar({ authenticated, toggleTheme, handleLogout }) {
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault(); // Prevent default link behavior
    handleLogout(); // Call the logout function passed as a prop
    navigate("/login"); // Redirect to the login page
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <NavLink to="/gallery" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">
            Contact
          </NavLink>
        </li>
        <li className="right1">
          <button className="theme-toggle" onClick={toggleTheme}>
            Toggle Theme
          </button>
        </li>
        {authenticated && (
          <li className="right">
            <a href="/login" onClick={logout}>
              Logout
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
