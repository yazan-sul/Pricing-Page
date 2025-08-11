import React from "react";
import logo from '../logo.svg';

export function Navbar() {
  return (
    <header>
      <div className="header-container">
        <nav className='nav-features'>
          <a>Abstractly</a>

          <ul>
            <li><a className='header-nav-item' href='#'>Home</a></li>
            <li><a className='header-nav-item' href='#'>Features</a></li>
            <li><a className='header-nav-item' href='#'>Pricing</a></li>
            <li><a className='header-nav-item' href='#'>About us</a></li>
            <li><a className='header-nav-item' href='#'>Contact</a></li>
          </ul>
          
        </nav>
        <div >
          <button className="header-buttons">Learn More</button>
          <button className="header-buttons">See pricing</button>
        </div>
      </div>
    </header>
  );
}
