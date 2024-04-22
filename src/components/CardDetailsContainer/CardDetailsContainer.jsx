import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    CardDetailsStyles,
    CardDetailsUl,
    CardDetailsList,
    ContainerList,
    Container,
    Chevron,
    ImgContainer
} from './CardDetailsContainerStyles';

const importAll = (r) => {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));

const CardDetailsContainer = ({ project, onClose }) => {
    const [listStates, setListStates] = useState({});

    const toggleListVisibility = (projectId, index) => {
        setListStates(prevStates => ({
            ...prevStates,
            [projectId]: {
                ...prevStates[projectId],
                [index]: !prevStates[projectId]?.[index],
            },
        }));
    };

    if (!project || !project.fonction) {
        return (
            <div>
                <h2>Données manquantes</h2>
                <p>Aucune donnée disponible</p>
                <button onClick={onClose}>Fermer</button>
            </div>
        );
    }

    return (
        <CardDetailsStyles>
            <h2>{project.title}</h2>
            <h3>Déscription :</h3>
            <p>{project.description}</p>
            <Container>
                <>
                    {project.fonction.map((func, index) => (
                        <ContainerList key={index} onClick={() => toggleListVisibility(project.id, index)}>
                            <h4>{func.name}</h4>
                            <Chevron $isRotated={listStates[project.id]?.[index]} />
                            <CardDetailsUl>
                                {listStates[project.id]?.[index] && (
                                    <>
                                        {func.list.map((item, idx) => (
                                            <CardDetailsList key={idx}>{item}</CardDetailsList>
                                        ))}
                                    </>
                                )}
                            </CardDetailsUl>
                            <ImgContainer>
                                {func.imgs && listStates[project.id]?.[index] && (
                                    <>
                                        {func.imgs.map((image, idx) => (
                                            <img key={idx} src={images[image]} alt={""} />
                                        ))}
                                    </>
                                )}
                            </ImgContainer>
                        </ContainerList>
                    ))}
                </>
            </Container>
            <button onClick={onClose}>Fermer</button>
        </CardDetailsStyles>
    );
};

CardDetailsContainer.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        fonction: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
            }).isRequired
        ).isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CardDetailsContainer;
