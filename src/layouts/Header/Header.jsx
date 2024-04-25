import React from 'react';
import { HeaderContainer, Logo } from './HeaderStyles'; // Importez vos styles


const Header = () => {
    return (
        <HeaderContainer>
            {/* Utilisez votre styled-component pour le logo */}
            <Logo src={process.env.PUBLIC_URL + '/assets/images/logo.svg'} alt="Logo" />
            {/* Ajoutez d'autres éléments du header ici si nécessaire */}
        </HeaderContainer>
    );
}

export default Header;
