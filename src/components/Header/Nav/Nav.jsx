import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-bar">
        <li className="nav-link">
          <Link to="/" className="nav-link-active">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/search" className="nav-link">Search</Link>
        </li>
        <li className="nav-link">
          <Link to="/create" className="nav-link">Create Pokemon</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
