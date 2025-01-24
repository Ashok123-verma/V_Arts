import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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
            <img src="/images/Icon.jpg" alt="CodingNepal" />
          </a>
          <button className="sidebar-toggler" onClick={toggleSidebar}>
            <span className="material-symbols-rounded">chevron_left</span>
          </button>
        </header>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            {/* Dashboard */}
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link"> {/* Changed a href to Link */}
                <span className="material-symbols-rounded">dashboard</span>
                <span className="nav-label">Dashboard</span>
              </Link>
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
                <li className="nav-item">
                  <Link to="/services/it-consulting" className="nav-link"> {/* Redirect to specific service */}
                    IT Consulting
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services/cloud-solutions" className="nav-link"> {/* Redirect to specific service */}
                    Cloud Solutions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services/mobile-apps" className="nav-link"> {/* Redirect to specific service */}
                    Mobile Apps
                  </Link>
                </li>
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
                <li className="nav-item">
                  <Link to="/bookmarks/saved-tutorials" className="nav-link"> {/* Redirect to saved tutorials */}
                    Saved Tutorials
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/bookmarks/favorite-blogs" className="nav-link"> {/* Redirect to favorite blogs */}
                    Favorite Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/bookmarks/resource-guides" className="nav-link"> {/* Redirect to resource guides */}
                    Resource Guides
                  </Link>
                </li>
              </ul>
            </li>

            {/* Notifications */}
            <li className="nav-item">
              <Link to="/notifications" className="nav-link"> {/* Redirect to notifications page */}
                <span className="material-symbols-rounded">notifications</span>
                <span className="nav-label">Notifications</span>
              </Link>
            </li>

            {/* Settings */}
            <li className="nav-item">
              <Link to="/settings" className="nav-link"> {/* Redirect to settings page */}
                <span className="material-symbols-rounded">settings</span>
                <span className="nav-label">Settings</span>
              </Link>
            </li>

            {/* Sign Out */}
            <li className="nav-item">
              <Link to="/login" className="nav-link"> {/* Redirect to login page */}
                <span className="material-symbols-rounded">logout</span>
                <span className="nav-label">Sign Out</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
