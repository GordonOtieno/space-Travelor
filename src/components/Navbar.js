import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const linkStyle = {
    textDecoration: 'none',
    color: '#121212',
  };
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-brand d-flex">
          <img className="logo" alt="logo" src={`${process.env.PUBLIC_URL}planet.png`} />
          <h1 className="ms-3">Space Traveler&apos;s Hub</h1>
        </div>

      </nav>
      <ul className="navbar">
        <li className="nav-item">
          <Link style={linkStyle} to="/">
            Rockets
          </Link>
        </li>
        <li>
          <Link style={linkStyle} to="/missions">
            Missions
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
