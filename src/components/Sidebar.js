import React, { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle Sidebar Collapse
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // Toggle Dropdown Menu
  const toggleDropdownMenu = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className={`sidebar-container ${collapsed ? 'collapsed' : ''}`}>
      {/* Sidebar Menu Button */}
      <button className="sidebar-menu-button" onClick={toggleSidebar}>
        <span className="material-symbols-rounded">menu</span>
      </button>

      <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        {/* Sidebar Header */}
        <header className="sidebar-header">
          <a href="#" className="header-logo">
            <img src="logo.png" alt="CodingNepal" />
          </a>
          <button className="sidebar-toggler" onClick={toggleSidebar}>
            <span className="material-symbols-rounded">chevron_left</span>
          </button>
        </header>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            {/* Dashboard */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="material-symbols-rounded">dashboard</span>
                <span className="nav-label">Dashboard</span>
              </a>
            </li>

            {/* Dropdown 1 */}
            <li className="nav-item">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdownMenu(0)}
              >
                <span className="material-symbols-rounded">calendar_today</span>
                <span className="nav-label">Services</span>
                <span className="material-symbols-rounded">keyboard_arrow_down</span>
              </a>
              <ul className={`dropdown-menu ${openDropdown === 0 ? 'open' : ''}`}>
                <li className="nav-item"><a className="nav-link">IT Consulting</a></li>
                <li className="nav-item"><a className="nav-link">Cloud Solutions</a></li>
                <li className="nav-item"><a className="nav-link">Mobile Apps</a></li>
              </ul>
            </li>

            {/* Dropdown 2 */}
            <li className="nav-item">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdownMenu(1)}
              >
                <span className="material-symbols-rounded">star</span>
                <span className="nav-label">Bookmarks</span>
                <span className="material-symbols-rounded">keyboard_arrow_down</span>
              </a>
              <ul className={`dropdown-menu ${openDropdown === 1 ? 'open' : ''}`}>
                <li className="nav-item"><a className="nav-link">Saved Tutorials</a></li>
                <li className="nav-item"><a className="nav-link">Favorite Blogs</a></li>
                <li className="nav-item"><a className="nav-link">Resource Guides</a></li>
              </ul>
            </li>

            {/* Notifications */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="material-symbols-rounded">notifications</span>
                <span className="nav-label">Notifications</span>
              </a>
            </li>

            {/* Settings */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="material-symbols-rounded">settings</span>
                <span className="nav-label">Settings</span>
              </a>
            </li>

            {/* Sign Out */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="material-symbols-rounded">logout</span>
                <span className="nav-label">Sign Out</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
