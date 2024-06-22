import React from 'react';
import {HeaderContainer, HeaderSize, Logo} from './HeaderStyles';
import NavLinks from '../../components/NavLinks/NavLinks';

import logo from '../../assets/images/logo.svg';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderSize>
                <Logo src={logo} alt="Logo" />
                <NavLinks />
            </HeaderSize>
        </HeaderContainer>
    );
}

export default Header;
