import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  const showMenu = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <div id="nav">
      <div id="sub-nav" className={menuVisible ? 'show' : ''}>
        <ul>
          <li><Link className="link-tag" to="/" onClick={() => setMenuVisible(false)}>Home</Link></li>
          <li><Link className="link-tag" to="/about" onClick={() => setMenuVisible(false)}>About</Link></li>
          <li><Link className="link-tag" to="/services" onClick={() => setMenuVisible(false)}>My Services</Link></li>
          <li><Link className="link-tag" to="/contact" onClick={() => setMenuVisible(false)}>Contact</Link></li>
        </ul>
      </div>

      <div id="nav-menu">
        <img
          id="menu"
          src="/menu.png"
          onClick={showMenu}
          alt="menu icon"
          style={{ width: '30px', cursor: 'pointer' }}
        />
      </div>
    </div>
  )
}

export default Navbar
