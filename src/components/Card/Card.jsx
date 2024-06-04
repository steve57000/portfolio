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
const cochePng = process.env.PUBLIC_URL + "/assets/icons/coche.png"
const Card = ({id, index, title = "Titre par défaut", objectif = "Objectif de mission", tags = ["tag1", "tag2"], image = "cardImage.png", savoir = [], websiteUrl = "", onClickMoreInfo }) => {
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
            <CardTitle $index={index}>{title}</CardTitle>
            <CardObjectif $index={index}>{objectif}</CardObjectif>
            <CardContainerTags $index={index}>
                <>
                    {tags.map((tag, index) => (
                        <CardTags key={index}>{tag}</CardTags>
                    ))}
                </>
            </CardContainerTags>
            <StyleSheetManager shouldForwardProp={(prop) => prop !== 'image'}>
                <CardImageContainer $index={index} image={image} />
            </StyleSheetManager>
            <CardSavoir $index={index}>
                <>
                    {savoir.map((savoirItem, idx) => (
                        <CardSavoirList key={idx}>
                            <CardSavoirImg src={cochePng} alt="" width="16px" height="16px" />
                            {savoirItem}
                        </CardSavoirList>
                    ))}
                </>
            </CardSavoir>
            <ContainerLink $index={index}>
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
    onClickMoreInfo: PropTypes.func.isRequired, // Fonction appelée lors du clic sur "Plus d'informations"
};

export default Card;