import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Nav } from "./NavStyles";
import { useLocation } from 'react-router-dom';

const NavLinks = () => {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split('/');

    return (
        <Nav>
            <ul>
                <li className={splitLocation[1] === '' ? 'active' : ''}><RouterLink to="/">Accueil</RouterLink></li>
                <li className={splitLocation[1] === 'cv' ? 'active' : ''}><RouterLink to="/cv">CV</RouterLink></li>
                <li className={splitLocation[1] === 'contact' ? 'active' : ''}><RouterLink to="/contact">Contact</RouterLink></li>
                {/* Ajoutez d'autres liens ici si nécessaire */}
            </ul>
        </Nav>
    );
};

export default NavLinks;
