import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <ul className="nav nav-pills my-3">
    <li className="nav-item">
      <NavLink exact to="/" activeClassName="active" className="nav-link">
        Home
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/mycollection" className="nav-link" activeClassName="active">My Collection</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/upload" className="nav-link" activeClassName="active">Upload Photo</NavLink>
    </li>
  </ul>
);

export default Header;
