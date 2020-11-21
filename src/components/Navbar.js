import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({darkmode,setDarkMode}) => {
      
      const themeHandler = () => {
            setDarkMode(!darkmode)
      }
      return (
            <nav className = "nav">
                  <Link to = '/'>
                        <h1>Where in the world</h1>
                  </Link>
                  <button onClick = {themeHandler}>
                        {darkmode ? <i className="fas fa-moon"></i> : <i className="far fa-moon"></i>}  <span className = "mode-text">Dark Mode</span>
                  </button>
            </nav>
      )
}

export default Navbar
