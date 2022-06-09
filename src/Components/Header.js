import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Style/Header.css'
import './Style/Responsive_Header.css'


function Header() {

  const [url, setUrl] = useState(useLocation().pathname.replace('/', ''));
  const [activeTab, setActiveTab] = useState(url === '' ? 'home' : url);

  useEffect(() => {
    setActiveTab(url === '' ? 'home' : url);
  }, [url]);

  return (
    <header>

      {/* Navbar */}
      <nav>

        <div className="title">
          <Link to="/" className="title-link" onClick={() => { setActiveTab("home") }}>
            <h1>My Potfolio</h1>
          </Link>
        </div>

        <div className="nav-tabs">
          <ul className="nav-list">
            <li className="nav-items">
              <Link to="/"
                className={`nav-links ${activeTab === "home" ? "active" : ''}`}
                title="Home"
                onClick={() => { setActiveTab("home") }}>
                <span className="nav-links-icon">
                  <i className="fi fi-rr-home"></i>
                </span>
                <span className="nav-links-text">
                  <h5>Home</h5>
                </span>
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/about"
                className={`nav-links ${activeTab === "about" ? "active" : ''}`}
                title="About"
                onClick={() => { setActiveTab("about") }}>
                <span className="nav-links-icon">
                  <i className="fi fi-rr-info"></i>
                </span>
                <span className="nav-links-text">
                  <h5>About</h5>
                </span>
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/projects"
                className={`nav-links ${activeTab === "projects" ? "active" : ''}`}
                title="Projects"
                onClick={() => { setActiveTab("projects") }}>
                <span className="nav-links-icon">
                  <i className="fi fi-rr-briefcase"></i>
                </span>
                <span className="nav-links-text">
                  <h5>Projects</h5>
                </span>
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/contact"
                className={`nav-links ${activeTab === "contact" ? "active" : ''}`}
                title="Contact"
                onClick={() => { setActiveTab("contact") }}>
                <span className="nav-links-icon">
                  <i className="fi fi-rr-comment-alt"></i>
                </span>
                <span className="nav-links-text">
                  <h5>Contact</h5>
                </span>
              </Link>
            </li>
          </ul>
        </div>

      </nav>

      {/* Info Bar */}
      <div className="info-bar">
        <p className="info-text">
          Here will be go some important notification.
        </p>
      </div>

    </header>
  )
}

export default Header;
