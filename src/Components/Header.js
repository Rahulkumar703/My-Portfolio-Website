import React from 'react'
import './Style/Header.css'

function Header() {
  return (
    <header>
      <nav>
        <a href="/" className="title">
          <span className="icon"></span>
          <h1>My Potfolio</h1>
        </a>
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
