import React from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="brand">
          <span className="brand-mark" />
          Explorelia
        </div>
        <div className="nav-links">
          <a>Home</a>
          <a>Explore</a>
          <a>Plan Trip</a>
          <a>Environmental Data</a>
          <a>About</a>
        </div>
        <div>
          <button className="btn theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
          <button className="btn">Sign In</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
