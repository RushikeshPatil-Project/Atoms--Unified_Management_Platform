

// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure the CSS file is correctly referenced
import logo from './logo.png'; // Ensure the logo path is correct
import { Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Atoms Logo" />
        <span>ATOMS</span>
      </div>
      <nav className="nav">
       
      <Nav.Link href="#whyatoms" className="nav-item">Why Atoms</Nav.Link>
          <a href="#service">Service</a>
          
      
          <a href="#contactus">Contact Us</a>
         
        <Nav.Link href="#aboutus" className="nav-item">About Us</Nav.Link>
      </nav>
    </header>
  );
};

export default Header;
