import React, { useState, useEffect } from 'react';
import useDataFetching from '../../utils/hooks/useData';
import CardDetailsContainer from '../../components/CardDetailsContainer/CardDetailsContainer';
import { ContainerProject, HomeContainer, ModalBackdrop, PageTitle, PageDescription } from './HomeStyles';
import { mockData } from "../../data/mockData";
import Card from "../../components/Card/Card";

const Home = () => {
    const { data, isLoading, error } = useDataFetching(mockData);
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [scrollToProjectId, setScrollToProjectId] = useState(null);
    const [selectedCardIdRef, setSelectedCardIdRef] = useState(null);

    const handleMoreInfoClick = (id) => {
        setSelectedCardId(id);
        setSelectedCardIdRef(id);
    };

    useEffect(() => {
        if (selectedCardId) {
            setScrollToProjectId(selectedCardId);
        }
    }, [selectedCardId]);

    const handleCloseDetails = () => {
        setSelectedCardId(null);
        if (selectedCardIdRef) {
            console.log(selectedCardIdRef)
            const cardElement = document.getElementById(`card-${selectedCardIdRef}`);

            if (cardElement) {
                console.log(cardElement)
                cardElement.scrollIntoView({ behavior: 'smooth' });
                cardElement.focus();
            }
        }
        setSelectedCardIdRef(null); // Réinitialiser l'identifiant de référence
    };

    if (isLoading) {
        return <div>Chargement en cours...</div>;
    }

    if (error) {
        return <div>Une erreur s'est produite : {error.message}</div>;
    }

    return (
        <HomeContainer>
            {selectedCardId ? (
                <>
                    <ModalBackdrop onClick={handleCloseDetails} />
                    <CardDetailsContainer
                        project={data.find((project) => project.id === selectedCardId)}
                        onClose={handleCloseDetails}
                        scrollToProjectId={scrollToProjectId}
                    />
                </>
            ) : (
                <>
                    <PageTitle>Bienvenue sur la page d'accueil</PageTitle>
                    <PageDescription>C'est ici que vous pouvez présenter votre portfolio, vos projets, etc.</PageDescription>
                    <ContainerProject>
                        <>
                            {data.map((project, index) => (
                                <Card
                                    key={project.id}
                                    id={`card-${project.id}`}
                                    index={index}
                                    title={project.title}
                                    objectif={project.objectif}
                                    tags={Array.isArray(project.tags) ? project.tags : []}
                                    image={project.images}
                                    savoir={Array.isArray(project.savoir) ? project.savoir : []}
                                    websiteUrl={project.websiteUrl}
                                    onClickMoreInfo={() => handleMoreInfoClick(project.id)}
                                />
                            ))}
                        </>
                    </ContainerProject>
                </>
            )}
        </HomeContainer>
    );
};

export default Home;