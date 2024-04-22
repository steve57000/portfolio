import React, { useRef, useState } from 'react';
import Card from '../../components/Card/Card';
import CardDetailsContainer from '../../components/CardDetailsContainer/CardDetailsContainer'; // Importez le nouveau composant
import { mockData } from '../../data/mockData';
import useDataFetching from '../../hooks/useData';
import {
    HomeContainer,
    PageTitle,
    PageDescription,
    ContainerProject,
    BorderContainerProjectCard,
    ContainerProjectCard,
    ScrollButtonLeft,
    ScrollButtonRight,
} from './HomeStyles';

const Home = () => {
    const { data, isLoading, error } = useDataFetching(mockData);
    const containerRef = useRef(null);
    const [selectedCardId, setSelectedCardId] = useState(null);

    // Gérer les cas de chargement et d'erreur
    if (isLoading) {
        return <div>Chargement en cours...</div>;
    }

    if (error) {
        return <div>Une erreur s'est produite : {error.message}</div>;
    }

    const scrollLeft = () => {
        containerRef.current.scrollLeft -= 400; // ajustez le nombre de pixels à défiler
    };

    const scrollRight = () => {
        containerRef.current.scrollLeft += 400; // ajustez le nombre de pixels à défiler
    };

    const handleMoreInfoClick = (id) => {
        setSelectedCardId(id);
    };

    const handleCloseDetails = () => {
        setSelectedCardId(null);
    };

    return (
        <HomeContainer>
            <PageTitle>Bienvenue sur la page d'accueil</PageTitle>
            <PageDescription>C'est ici que vous pouvez présenter votre portfolio, vos projets, etc.</PageDescription>
                <ContainerProject>
                    <ContainerProjectCard ref={containerRef}>
                        <>
                            {data.map((project) => (
                                <Card
                                    key={project.id} // Assurez-vous d'avoir une clé unique pour chaque carte
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
                    </ContainerProjectCard>
                    <ScrollButtonLeft
                        onClick={scrollLeft}
                        tabIndex={1}
                        aria-label="Défiler vers la gauche"
                        role="button"
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                scrollLeft();
                            }
                        }}
                    >
                        &lt;
                    </ScrollButtonLeft>
                    <ScrollButtonRight
                        onClick={scrollRight}
                        tabIndex={1}
                        aria-label="Défiler vers la droite"
                        role="button"
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                scrollRight();
                            }
                        }}
                    >
                        &gt;
                    </ScrollButtonRight>
                    <BorderContainerProjectCard></BorderContainerProjectCard>
                </ContainerProject>
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





