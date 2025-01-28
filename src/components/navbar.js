import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar({ authenticated, toggleTheme, handleLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    handleLogout();
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="logo">Gallery</div>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        </button>
      </div>
      <ul className={`navbar-menu ${menuOpen ? "show" : ""}`}>
        <li>
          <NavLink to="/gallery" activeClassName="active-link" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link" onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link" onClick={closeMenu}>
            Small
          </NavLink>
        </li>
        <li>
          <button className="theme-toggle" onClick={toggleTheme}>
            Toggle Theme
          </button>
        </li>
        {authenticated && (
          <li>
            <a href="/login" onClick={(e) => { logout(e); closeMenu(); }}>
              Logout
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;