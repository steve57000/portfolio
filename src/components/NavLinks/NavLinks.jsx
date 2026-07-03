import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from './NavStyles';

const NavLinks = () => (
  <Nav aria-label="Navigation principale">
    <ul>
      <li><NavLink to="/">Portfolio</NavLink></li>
      <li><a href="/#projets">Projets</a></li>
      <li><a href="/#parcours">Parcours</a></li>
      <li><NavLink to="/cv">CV</NavLink></li>
    </ul>
  </Nav>
);

export default NavLinks;
