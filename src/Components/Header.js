import React from 'react'
import './Style/Header.css'

function Header() {
  return (
    <header>

      <nav>

        <div className="title">
          <a href="/" className="title-link">
            <h1>My Potfolio</h1>
          </a>
        </div>

        <div className="nav-tabs">
          <ul className="nav-list">
            <li href="/" className="nav-items">
              <a className="nav-links">
                <span className="nav-links-icon">
                  <i class="fi fi-rr-home"></i>
                </span>
                <span className="nav-links-text">
                  <h5>Home</h5>
                </span>
              </a>
            </li>
            <li href="/" className="nav-items">
              <a className="nav-links">
                <span className="nav-links-icon">
                  <i class="fi fi-rr-info"></i>
                </span>
                <span className="nav-links-text">
                  <h5>About</h5>
                </span>
              </a>
            </li>
            <li href="/" className="nav-items">
              <a className="nav-links">
                <span className="nav-links-icon">
                  <i class="fi fi-rr-briefcase"></i>
                </span>
                <span className="nav-links-text">
                  <h5>Projects</h5>
                </span>
              </a>
            </li>
            <li href="/" className="nav-items">
              <a className="nav-links">
                <span className="nav-links-icon">
                  <i class="fi fi-rr-comment-alt"></i>
                </span>
                <span className="nav-links-text">
                  <h5>Contact</h5>
                </span>
              </a>
            </li>
          </ul>
        </div>

      </nav>

      <div className="info-bar">
        <p className="info-text">
          Here will be go some important notification.
        </p>
      </div>

    </header>
  )
}

export default Header;
