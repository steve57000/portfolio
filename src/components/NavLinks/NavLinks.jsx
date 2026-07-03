import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from './NavStyles';

const getSectionHref = (sectionId) => `${process.env.PUBLIC_URL || ''}/#${sectionId}`;

const NavLinks = () => (
  <Nav aria-label="Navigation principale">
    <ul>
      <li><NavLink to="/">Portfolio</NavLink></li>
      <li><a href={getSectionHref('projets')}>Projets</a></li>
      <li><a href={getSectionHref('competences')}>Compétences</a></li>
      <li><a href={getSectionHref('parcours')}>Parcours</a></li>
      <li><NavLink to="/cv">CV</NavLink></li>
      <li><a href={getSectionHref('contact')}>Contact</a></li>
    </ul>
  </Nav>
);

export default NavLinks;
