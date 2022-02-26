import React from 'react';
import './NavBar.css';
import logo from '../../logo.png';

function NavBar () {
  return (
    <div className="container">
      <div className="header-bar">
        <img src={logo} className="logo" alt="Trade Standard Logo"/>
        <ul className="slider-menu">
          <li>About</li>
          <li>Services</li>
        </ul>
      </div>
    </div>
  )
}
export default NavBar