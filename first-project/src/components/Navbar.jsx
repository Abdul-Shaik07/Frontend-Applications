import React from 'react'
import logo from "../images/logo.webp"

import './Navbar.css'


const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="links">
                <ul>
                    <li>Menu</li>
                    <li>location</li>
                    <li>contact</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="login">
                <button type="button" className='login-btn'>login</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar