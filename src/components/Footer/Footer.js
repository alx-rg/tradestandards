import React from 'react';
import "./Footer.css";

function Footer() {
  const current = new Date();
  const year = `${current.getFullYear()}`
  return(
    <div>
      <p>Trade Standards: Your contractor of choice</p>
      <p><small>copyright {year}</small></p>
    </div>
  )
}

export default Footer