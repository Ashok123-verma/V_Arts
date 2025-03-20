import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar({ authenticated, toggleTheme, handleLogout, toggleSidebar }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    handleLogout();
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar")) {
        closeMenu();
      }
    };
    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-header">
        {/* ✅ Click "Gallery" to Toggle Sidebar */}
        <div className="logo" onClick={toggleSidebar} style={{ cursor: "pointer" }}>
          Gallery
        </div>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle Menu"
        >
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        </button>
      </div>

      <ul className={`navbar-menu ${menuOpen ? "show" : ""}`}>
        <li>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={closeMenu}>
            Contact
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
