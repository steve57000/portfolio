import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
    CardDetailsStyles,
    CardDetailsUl,
    CardDetailsList,
    ContainerList,
    Container,
    Chevron,
    ImgContainer,
    ButtonWithTopMargin,
    ButtonWithBottomMargin,
} from './CardDetailsContainerStyles';

import FullScreenVideoModal from "../FullScreenVideoModal/FullScreenVideoModal";

const CardDetailsContainer = ({ project, onClose, scrollToProjectId }) => {
    const [listStates, setListStates] = useState({});
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [selectedVideoIndex, setSelectedVideoIndex] = useState()
    const anchorRef = useRef(null);
    const toggleListVisibility = (projectId, index) => {
        setListStates(prevStates => ({
            ...prevStates,
            [projectId]: {
                ...prevStates[projectId],
                [index]: !prevStates[projectId]?.[index],
            },
        }));
    };

    useEffect(() => {
        if (scrollToProjectId && anchorRef.current) {
            anchorRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [scrollToProjectId]);

    const handleOpenPDF = (pdfLink) => {
        if (project.docs) {
            window.open(process.env.PUBLIC_URL + `/assets/docs/${pdfLink}`, '_blank');
        }
    };

    const handleOpenVideo = (indexVideo) => {
        setIsVideoModalOpen(true);
        setSelectedVideoIndex(indexVideo)
    };

    const handleCloseVideoModal = () => {
        setIsVideoModalOpen(false);
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
            <h2 ref={anchorRef}>{project.title}</h2>
            <h3>Description :</h3>
            <p>{project.description}</p>
            <Container>
                <>
                    {project.fonction.map((func, index) => (
                        <ContainerList
                            key={index}
                            role="button"
                            tabIndex={0}
                            onClick={() => toggleListVisibility(project.id, index)}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    toggleListVisibility(project.id, index);
                                }
                            }}
                            $isOpen={listStates[project.id]?.[index]} // Appliquer la couleur de la liste
                        >
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
                                            <img key={idx} src={process.env.PUBLIC_URL + `/assets/images/${image}`} alt="" />
                                        ))}
                                    </>
                                )}
                            </ImgContainer>
                        </ContainerList>
                    ))}
                </>
                <>
                    {project.docs && project.docs.map((doc, index) => (
                        <ButtonWithTopMargin
                            key={index}
                            role="button"
                            tabIndex={0}
                            aria-label={`Ouvrir le document ${doc.nameDocs}`}
                            onClick={() => handleOpenPDF(doc.link)}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    handleOpenPDF(doc.link)
                                }
                            }}
                        >
                            Voir {doc.nameDocs}
                        </ButtonWithTopMargin>
                    ))}
                </>
                <>
                    {project.video && project.video.map((video, index) => (
                            <ButtonWithTopMargin key={index} onClick={ () => handleOpenVideo(index)}>
                                Voir {video.name}
                            </ButtonWithTopMargin>
                        )
                    )}
                </>
                <ButtonWithBottomMargin onClick={onClose}>
                    Fermer
                </ButtonWithBottomMargin>
            </Container>
            {isVideoModalOpen && (
                <FullScreenVideoModal
                    videoSrc={project.video[selectedVideoIndex].link}
                    onClose={handleCloseVideoModal}
                />
            )}
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
        docs: PropTypes.arrayOf(
            PropTypes.shape({
                nameDocs: PropTypes.string,
                link: PropTypes.string,
        })
        ),
        video: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                link: PropTypes.string,
            })
        ),
    }).isRequired,
    onClose: PropTypes.func.isRequired,
    scrollToProjectId: PropTypes.number, // Propriété pour le défilement jusqu'au projet spécifique
};

export default CardDetailsContainer;
