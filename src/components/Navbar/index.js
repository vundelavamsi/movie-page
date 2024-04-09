import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import "./index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        MovieDb
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/popular">Popular</NavLink>
        </li>
        <li>
          <NavLink to="/top-rated">Top Rated</NavLink>
        </li>
        <li>
          <NavLink to="/upcoming">Upcoming</NavLink>
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
