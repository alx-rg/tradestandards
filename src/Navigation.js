import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Link,
} from 'react-router-dom';

const Navigation = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/about">About</Link>
          </li>
          <li>
            <Link to = "/services">Services</Link>
          </li>
        </ul>
      </div>
    </Router>
  )
}