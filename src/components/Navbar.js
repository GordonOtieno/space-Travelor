import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const linkStyle = {
    textDecoration: 'none',
    color: '#121212',
  };
  const activeStyle = {
    textDecoration: 'underline',
    color: '#0000FF',

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
          <NavLink to="/" end style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>
            Rockets
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/missions" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>
            Missions
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/profile" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>
            Profile
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
