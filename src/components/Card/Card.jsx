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
    CardSavoirImg,
} from './CardStyles';

import CochePng from '../../assets/icons/coche.png';

const Card = ({id, index, title = "Titre par défaut", objectif = "Objectif de mission", tags = ["tag1", "tag2"], image = "cardImage.png", savoir = [], websiteUrl = "", fonction = [], onClickMoreInfo, onOpenModal }) => {
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
            <CardImageContainer image={image} />
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
                {fonction?.length > 0 && (
                    <CardLink
                        aria-label="Plus d'informations"
                        role="button"
                        tabIndex={0}
                        onClick={() => onClickMoreInfo()}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                event.stopPropagation();
                                onClickMoreInfo();
                            }
                        }}
                    >
                        Plus d'informations
                    </CardLink>
                )}
                {websiteUrl && (
                    <CardLink
                        onClick={onOpenModal}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                event.stopPropagation();
                                onOpenModal();
                            }
                        }}
                        aria-label="Visitez le site web"
                        role="button"
                        tabIndex={0}
                    >
                        Voir le site web
                    </CardLink>
                )}
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
    fonction: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        list: PropTypes.arrayOf(PropTypes.string).isRequired,
        imgs: PropTypes.arrayOf(PropTypes.string)
    })),
    onClickMoreInfo: PropTypes.func.isRequired,
    onOpenModal: PropTypes.func.isRequired,
};

export default Card;
