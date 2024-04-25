import React from 'react';
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
    CardSavoirImg
} from './CardStyles';
import {StyleSheetManager} from "styled-components";
const cocheGif = process.env.PUBLIC_UR + "/assets/icons/coche.png"
const Card = ({ id, title, objectif, tags, image, savoir, websiteUrl, onClickMoreInfo }) => {
    return (
        <CardContainer>
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
                            <CardSavoirImg src={cocheGif} alt="" width="16px" height="16px" />
                            {savoir}
                        </CardSavoirList>
                    ))}
                </>
            </CardSavoir>
            <ContainerLink>
                <CardLink
                    onClick={() => onClickMoreInfo(id)}
                    aria-label="Plus d'informations"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            onClickMoreInfo(id); // Déclenche l'action lorsque la touche "Entrée" est pressée
                        }
                    }}
                >
                    Plus d'informations
                </CardLink>

                {websiteUrl &&
                    <CardLink
                        href={websiteUrl}
                        aria-label="Visitez le site web"
                    >
                        Voir le site web
                    </CardLink>

                }
            </ContainerLink>
        </CardContainer>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    objectif: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    description: PropTypes.string,
    websiteUrl: PropTypes.string,
    onClickMoreInfo: PropTypes.func.isRequired, // Fonction appelée lors du clic sur "Plus d'informations"
};


Card.defaultProps = {
    title: "Titre par défaut",
    objectif: "Objectif de mission",
    tags: ["tag1", "tag2"],
    image: "cardImage.png",
    description:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    onClickMoreInfo: null,
};

export default Card;

