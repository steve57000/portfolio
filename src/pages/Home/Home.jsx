import React, { useState, useEffect, useRef } from 'react';
import useDataFetching from '../../hooks/useData';
import CardDetailsContainer from '../../components/CardDetailsContainer/CardDetailsContainer';
import {HomeContainer, ModalBackdrop} from './HomeStyles'; // Import de la balise HomeContainer
import { mockData } from "../../data/mockData";
import ProjectList from "../../components/ProjectList/ProjectList";

const Home = () => {
    const { data, isLoading, error } = useDataFetching(mockData);
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [scrollToProjectId, setScrollToProjectId] = useState(null);
    const lastFocusedElement = useRef(null);

    const handleMoreInfoClick = (event) => {
        setSelectedCardId(event);
        lastFocusedElement.current = event.currentTarget;
    };

    useEffect(() => {
        if (selectedCardId) {
            setScrollToProjectId(selectedCardId);
        }
    }, [selectedCardId]);
    const handleCloseDetails = () => {
        setSelectedCardId(null);
        if (lastFocusedElement.current) {
            lastFocusedElement.current.focus();
        }
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
                    <h1>Bienvenue sur la page d'accueil</h1>
                    <p>C'est ici que vous pouvez présenter votre portfolio, vos projets, etc.</p>
                    <ProjectList data={data} handleMoreInfoClick={handleMoreInfoClick} />
                </>
            )}
        </HomeContainer>
    );
};

export default Home;