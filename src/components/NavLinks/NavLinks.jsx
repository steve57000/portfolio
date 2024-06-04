import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Nav } from "./NavStyles";
import { useLocation } from 'react-router-dom';

const NavLinks = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split('/');

    // Tableau contenant les noms de vos liens et les routes correspondantes
    const links = [
        { name: 'Accueil', path: '/' },
        { name: 'CV', path: '/cv' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <Nav>
            <ul>
                {/* Utilisation de map pour parcourir le tableau de liens */}
                {links.map((link, index) => (
                    // Utilisation de link.path comme condition de classe active
                    <li
                        key={link.name}
                        className={splitLocation[1] === link.path.replace('/', '') ? 'active' : ''}
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        {/* Utilisation de link comme texte et lien */}
                        <RouterLink to={link.path}>
                            {link.name}
                        </RouterLink>
                    </li>
                ))}
            </ul>
        </Nav>
    );
};

export default NavLinks;

