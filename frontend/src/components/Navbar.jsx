import React from 'react'
import ThemeToggle from './theme/ThemeToggle.jsx';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="brand">
          <span className="brand-mark" />
          Jaipur Smart Guide
        </div>
        <div className="nav-links">
          <a>Home</a>
          <a>Explore</a>
          <a>Plan Trip</a>
          <a>Environmental Data</a>
          <a>About</a>
        </div>
        <div>
          <button className="btn">Sign In</button>
        </div>
        <ThemeToggle/>
      </div>
    </nav>
  )
}

export default Navbar
