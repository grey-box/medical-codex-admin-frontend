import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

function NavigationBar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink to='/' className='logo-text'>Greybox</NavLink>
        </div>
        <div className="admin-icon" onClick={handleShowNavbar}>
        <img src={`${process.env.PUBLIC_URL}/icon.png`} alt="Icon" />
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
          <ul>
            <li> <NavLink to="/about" className="nav-link">About</NavLink></li>
            <li> <NavLink to="/help" className="nav-link">Help</NavLink></li>
          </ul>
        </div>
      </div>
  </div>
  );
}

export default NavigationBar;
