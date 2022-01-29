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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nihil minus facilis odit beatae perferendis, et illo iusto pariatur est?
        </p>
      </div>
    </header>
  )
}

export default Header;
