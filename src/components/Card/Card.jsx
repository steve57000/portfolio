import React, {useState} from 'react';
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
import {StyleSheetManager} from "styled-components";
const cochePng = process.env.PUBLIC_URL + "/assets/icons/coche.png"
const Card = ({ title = "Titre par défaut", objectif = "Objectif de mission", tags = ["tag1", "tag2"], image = "cardImage.png", savoir = [], websiteUrl = "", onClickMoreInfo = ()=> {}, cardMarginRight = 0 }) => {
    const [openModal, setOpenModal] = useState(false);
    const handleLinkClick = (openInNewTab) => {
        if (openInNewTab) {
            window.open(websiteUrl, '_blank');
        } else {
            window.location.href = websiteUrl;
        }
    };

    return (
        <CardContainer $cardMarginRight={cardMarginRight}>
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
                    {savoir.map((savoir, index) => (
                        <CardSavoirList key={index}>
                            <CardSavoirImg src={cochePng} alt="" width="16px" height="16px" />
                            {savoir}
                        </CardSavoirList>
                    ))}
                </>
            </CardSavoir>
            <ContainerLink>
                <CardLink
                    aria-label="Plus d'informations"
                    role="button"
                    tabIndex={0}
                    onClick={onClickMoreInfo}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            onClickMoreInfo(); // Déclenche l'action lorsque la touche "Entrée" est pressée
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
                                    setOpenModal(true); // Déclenche l'action lorsque la touche "Entrée" est pressée
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
    idProject: PropTypes.number,
    title: PropTypes.string.isRequired,
    objectif: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    savoir: PropTypes.arrayOf(PropTypes.string),
    websiteUrl: PropTypes.string,
    onClickMoreInfo: PropTypes.func.isRequired, // Fonction appelée lors du clic sur "Plus d'informations"
    cardMarginRight: PropTypes.number.isRequired,
};

export default Card;

