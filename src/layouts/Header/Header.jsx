import React from 'react';
import { HeaderContainer, Logo } from './HeaderStyles'; // Importez vos styles

import logo from '../../assets/images/logo.svg'; // Importez votre logo

const Header = () => {
    return (
        <HeaderContainer>
            {/* Utilisez votre styled-component pour le logo */}
            <Logo src={logo} alt="Logo" />
            {/* Ajoutez d'autres éléments du header ici si nécessaire */}
        </HeaderContainer>
    );
}

export default Header;
