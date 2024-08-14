import React from 'react';
import { FooterContainer, FooterText } from './FooterStyles'; // Importation des styles

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>&copy; {new Date().getFullYear()} Steve Bell. Tous droits réservés.</FooterText>
        </FooterContainer>
    );
};

export default Footer;
