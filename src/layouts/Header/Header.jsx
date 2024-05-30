import React from 'react';
import {HeaderContainer, HeaderSize, Logo} from './HeaderStyles';
import NavLinks from '../../components/NavLinks/NavLinks';


const Header = () => {
    return (
        <HeaderContainer>
            <HeaderSize>
                <Logo src={process.env.PUBLIC_URL + '/assets/images/logo.svg'} alt="Logo" />
                <NavLinks />
            </HeaderSize>
        </HeaderContainer>
    );
}

export default Header;
