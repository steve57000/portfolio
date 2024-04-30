import React, { useState } from 'react';
import CardDetailsContainer from '../../components/CardDetailsContainer/CardDetailsContainer';
import useDataFetching from '../../hooks/useData';
import { HomeContainer, PageDescription, PageTitle } from './HomeStyles';
import ProjectList from '../../components/ProjectList/ProjectList';
import {mockData} from "../../data/mockData";

const Home = () => {
    const { data, isLoading, error } = useDataFetching(mockData);
    const [selectedCardId, setSelectedCardId] = useState(null);

    const handleMoreInfoClick = (id) => {
        setSelectedCardId(id);
    };

    const handleCloseDetails = () => {
        setSelectedCardId(null);
    };

    if (isLoading) {
        return <div>Chargement en cours...</div>;
    }

    if (error) {
        return <div>Une erreur s'est produite : {error.message}</div>;
    }

    return (
        <HomeContainer>
            <PageTitle>Bienvenue sur la page d'accueil</PageTitle>
            <PageDescription>C'est ici que vous pouvez présenter votre portfolio, vos projets, etc.</PageDescription>
            <ProjectList data={data} handleMoreInfoClick={handleMoreInfoClick} />
            {selectedCardId && (
                <CardDetailsContainer
                    project={data.find((project) => project.id === selectedCardId)}
                    onClose={handleCloseDetails}
                />
            )}
        </HomeContainer>
    );
};

export default Home;





