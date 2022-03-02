import React, { useState, useEffect } from 'react';
import './NavBar.css';
import logo from '../../logo.png';
import { NavLink } from 'react-router-dom'

function NavBar () {
  const [scrolled,setScrolled]=React.useState(false);
  const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 200 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
  
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })

  return (
    <header className={setScrolled? 'navbar scrolled' : 'navbar'}>

    {/* <div className={`h-16 w-full bg-gray-200 ${stickyClass}`}> */}
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
          to="/contact">Contact</NavLink>
        </ul>
      </div>
    </div>
  </header>
  )
}
export default NavBar

