import React from 'react';
import { FooterContainer, FooterText, FooterLink } from './FooterStyles'; // Importation des styles

const Footer = () => {
    return (
        <FooterContainer> {/* Utilisation du composant stylé */}
            <FooterText>Ceci est le footer de votre site.</FooterText>
            <FooterLink href="#">Votre lien</FooterLink>
        </FooterContainer>
    );
};

export default Footer;
