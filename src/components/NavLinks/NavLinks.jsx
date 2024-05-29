import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {Nav} from "./NavStyles";

const NavLinks = () => {
    return (
        <Nav>
            <ul>
                <li><RouterLink to="/">Accueil</RouterLink></li>
                <li><RouterLink to="/cv">CV</RouterLink></li>
                <li><RouterLink to="/contact">Contact</RouterLink></li>
                {/* Ajoutez d'autres liens ici si nécessaire */}
            </ul>
        </Nav>
    );
};

export default NavLinks;
