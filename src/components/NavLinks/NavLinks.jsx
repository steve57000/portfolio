import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const NavLinks = () => {
    return (
        <nav>
            <ul>
                <li><RouterLink to="/">Accueil</RouterLink></li>
                <li><RouterLink to="/cv">CV</RouterLink></li>
                <li><RouterLink to="/contact">Contact</RouterLink></li>
                {/* Ajoutez d'autres liens ici si nécessaire */}
            </ul>
        </nav>
    );
};

export default NavLinks;
