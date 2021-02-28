import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => (
  <nav className="navbar">
    <div className="nav-wrapper px1">
      <a href="/" className="brand-logo top">
        NHL Players 2021
      </a>
      <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/add/player">Add new player</NavLink>
        </li>
      <li>
        <NavLink to="/table">All players</NavLink>
        </li>
        <li>
          <NavLink to="/">Statistic</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)