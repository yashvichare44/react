import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';


function Navbar() {

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div>
          <p className='navbar-logo'>
          Yash
          </p>
        </div>
        <ul className='nav-menu'>
  <li className='nav-item'>
    <Link
      activeClass="active"
      to="home"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      Home
    </Link>
  </li>
  <li className='nav-item'>
    <Link
      activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      offset={10}
      duration={500}
    >
      About
    </Link>
  </li>
  <li className='nav-item'>
    <Link
      activeClass="active"
      to="projects"
      spy={true}
      smooth={true}
      offset={10}
      duration={500}
    >
      Projects
    </Link>
  </li>
  <li className='nav-item'>
    <Link
      activeClass="active"
      to="contact"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      Contact
    </Link>
  </li>
</ul>

      </div>
    </nav>
  );
}

export default Navbar;
