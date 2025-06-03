import React, { useState } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  const showMenu = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <div id="nav">
     
        <ul>
          <li><NavLink className="link-tag" to="/" onClick={() => setMenuVisible(false)}>Home</NavLink></li>
          <li><NavLink className="link-tag" to="/about" onClick={() => setMenuVisible(false)}>About</NavLink></li>
          <li><NavLink className="link-tag" to="/services" onClick={() => setMenuVisible(false)}>Services</NavLink></li>
          <li><NavLink className="link-tag" to="/contact" onClick={() => setMenuVisible(false)}>Contact</NavLink></li>
        </ul>
     


    </div>
  )
}

export default Navbar
