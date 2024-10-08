import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    CardContainer,
    CardTitle,
    CardObjectif,
    CardContainerTags,
    CardTags,
    CardSavoir,
    CardSavoirList,
    ContainerLink,
    CardLink,
    CardImageContainer,
    CardSavoirImg,
    ModalContent,
    Modal,
    Button,
    ContainerButtonHandleLink
} from './CardStyles';
import { StyleSheetManager } from "styled-components";
// import CochePng from '../../assets/icons/coche.png'
const CochePng = require('../../assets/icons/coche.png')
const Card = ({id, index, title = "Titre par défaut", objectif = "Objectif de mission", tags = ["tag1", "tag2"], image = "cardImage.png", savoir = [], websiteUrl = "", fonction = [], onClickMoreInfo }) => {
    const [openModal, setOpenModal] = useState(false);

    const handleLinkClick = (openInNewTab) => {
        if (openInNewTab) {
            window.open(websiteUrl, '_blank');
        } else {
            window.location.href = websiteUrl;
        }
    };
    return (

        <CardContainer id={id} $index={index}>
            <CardTitle>{title}</CardTitle>
            <CardObjectif>{objectif}</CardObjectif>
            <CardContainerTags>
                <>
                    {tags.map((tag, index) => (
                        <CardTags key={index}>{tag}</CardTags>
                    ))}
                </>
            </CardContainerTags>
            <StyleSheetManager shouldForwardProp={(prop) => prop !== 'image'}>
                <CardImageContainer image={image} />
            </StyleSheetManager>
            <CardSavoir>
                <>
                    {savoir.map((savoirItem, idx) => (
                        <CardSavoirList key={idx}>
                            <CardSavoirImg src={CochePng} alt="" width="16px" height="16px" />
                            {savoirItem}
                        </CardSavoirList>
                    ))}
                </>
            </CardSavoir>
            <ContainerLink>
                {fonction &&
                    <>
                        <CardLink
                            aria-label="Plus d'informations"
                            role="button"
                            tabIndex={0}
                            onClick={() => onClickMoreInfo()}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    onClickMoreInfo();
                                }
                            }}
                        >
                            Plus d'informations
                        </CardLink>
                    </>
                }

                {websiteUrl &&
                    <>
                        <CardLink
                            onClick={() => setOpenModal(true)}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    setOpenModal(true);
                                }
                            }}
                            aria-label="Visitez le site web"
                            role="button"
                            tabIndex={0}
                        >
                            Voir le site web
                        </CardLink>
                        {openModal && (
                            <Modal>
                                <ModalContent>
                                    <p>Comment voulez-vous ouvrir le lien?</p>
                                    <ContainerButtonHandleLink>
                                        <Button
                                            onClick={() => { handleLinkClick(true); }}
                                            onKeyDown={(event) => {
                                                if (event.key === 'Enter') {
                                                    handleLinkClick(true);
                                                }
                                            }}
                                        >
                                            Dans un nouvel onglet
                                        </Button>
                                        <Button
                                            onClick={() => { handleLinkClick(false); }}
                                            onKeyDown={(event) => {
                                                if (event.key === 'Enter') {
                                                    handleLinkClick(false);
                                                }
                                            }}
                                        >
                                            Dans la page actuelle
                                        </Button>
                                    </ContainerButtonHandleLink>
                                    <Button onClick={() => setOpenModal(false)}>Annuler</Button>
                                </ModalContent>
                            </Modal>
                        )}
                    </>
                }
            </ContainerLink>
        </CardContainer>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    objectif: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    savoir: PropTypes.arrayOf(PropTypes.string),
    websiteUrl: PropTypes.string,
    fonction: PropTypes.arrayOf(PropTypes.string),
    onClickMoreInfo: PropTypes.func.isRequired, // Fonction appelée lors du clic sur "Plus d'informations"
};

export default Card;