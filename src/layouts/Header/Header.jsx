import React from 'react';
import { HeaderContainer, Logo } from './HeaderStyles';
import NavLinks from '../../components/NavLinks/NavLinks';


const Header = () => {
    return (
        <HeaderContainer>
            <Logo src={process.env.PUBLIC_URL + '/assets/images/logo.svg'} alt="Logo" />
            <NavLinks />
        </HeaderContainer>
    );
}

export default Header;
