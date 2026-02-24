import React from 'react'
import { useState } from 'react';

function Card({navItems}) {

  return (
    <div className='main-container'>
        <div className="header">
            <h2>Developers Profile</h2>
            <nav className='nav-bar'>
                <div className="nav-list">
                    {
                        navItems.map((items, index) => (
                            <li key={index}>
                                <a href={items.href}>{items.title}</a>
                            </li>
                        ))
                    }
                    </div>
            </nav>
        </div>



    </div>
  )
}

export default Card