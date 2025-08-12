import React from "react";
import logo from "../logo.svg"
export function Navbar() {
  
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <img src={logo}/>
          <a href="#">Abstractly</a>
        </div>

        <nav className="main-nav">
          <ul>
            <li><a className="header-nav-item" href="#">Home</a></li>
            <li><a className="header-nav-item" href="#">Features</a></li>
            <li><a className="header-nav-item" href="#">Pricing</a></li>
            <li><a className="header-nav-item" href="#">About Us</a></li>
            <li><a className="header-nav-item" href="#">Contact</a></li>
          </ul>
        </nav>

        <div className="header-buttons">
          <button className="header-btn">Learn More</button>
          <button className="header-btn primary">See Pricing</button>
        </div>
      </div>
    </header>
  );
}
