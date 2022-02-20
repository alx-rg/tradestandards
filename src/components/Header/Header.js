import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar';

function Header() {
  return (
    <div className='Header'>
      <NavBar />
      <h1>TRADE STANDARDS</h1>
      <div className='Header-Subtitle'>We don't just meet the standard, we set them!</div>
    </div>
  )
}

export default Header