import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <nav className="Nav" data-testid="Nav">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/resume">Resumé</Link>
    {/* <Link to="/interests">Interests</Link> */}
    <Link to="/contact">Contact</Link>
  </nav>
);

export default Nav;
