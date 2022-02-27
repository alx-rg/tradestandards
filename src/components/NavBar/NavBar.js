import React from 'react';
import './NavBar.css';
import logo from '../../logo.png';
import { NavLink } from 'react-router-dom'

function NavBar () {
    
  return (

    <div className="container">
      <div className="header-bar">
        <NavLink to="/" >
          <img src={logo} className="logo" alt="Trade Standard Logo"/>
        </NavLink>
        <ul className="slider-menu">
          <NavLink 
            className={({ isActive }) => isActive ? "list-item-active": "list-item" }
            to="/">Home</NavLink>
            
          <NavLink 
            className={({ isActive }) => isActive ? "list-item-active": "list-item" }
            to="/services">Services</NavLink>
          
          <NavLink 
          className={({ isActive }) => isActive ? "list-item-active": "list-item" }
          to="/about">About</NavLink>

          <NavLink 
          className={({ isActive }) => isActive ? "list-item-active": "list-item" }
          to="/about">Contact</NavLink>
        </ul>
      </div>
    </div>
  )
}
export default NavBar

