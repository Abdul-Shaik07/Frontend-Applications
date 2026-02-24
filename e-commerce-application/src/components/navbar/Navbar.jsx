import React, { useState } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div>
            <nav className="navbar">
                <div className="logo-container">
                    <h1 className="navbar-logo">E-Commerce</h1>
                </div>
                <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                    <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Accessories</Link></li>
                    <li><Link href="/aboutus" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                </ul>
                <div className="login-cart">
                    <button className="login-button">
                        <span className="material-symbols-outlined login-icon">account_circle</span>
                        {/* <span className='login'>login</span> */}
                    </button>
                    <button className="cart-button">
                        <span className="material-symbols-outlined cart-icon">shopping_bag_speed</span>
                        {/* <span className='cart'>cart</span> */}
                    </button>
                </div>
                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
                </button>
            </nav>
        </div>
    )
}

export default Navbar