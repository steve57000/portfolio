import React, {useEffect, useRef, useState} from 'react';
import Card from '../../components/Card/Card';
import CardDetailsContainer from '../../components/CardDetailsContainer/CardDetailsContainer'; // Importez le nouveau composant
import {mockData} from '../../data/mockData';
import useDataFetching from '../../hooks/useData';
import {
    BorderContainerProjectCard,
    ContainerProject,
    ContainerProjectCard,
    HomeContainer,
    PageDescription,
    PageTitle,
    ScrollButtonLeft,
    ScrollButtonRight,
} from './HomeStyles';

const Home = () => {
    const { data, isLoading, error } = useDataFetching(mockData);
    const containerRef = useRef(null);
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [scrollAmount, setScrollAmount] = useState(400);

    const marginCard = 20

    useEffect(() => {
        // Fonction pour recalculer la valeur de défilement en fonction de la taille des cartes
        const updateScrollAmount = () => {
            const cardWidth = containerRef.current?.firstChild?.offsetWidth;
            if (cardWidth) {
                setScrollAmount(cardWidth);
            }
        };

        // Mettre à jour la valeur de défilement lors du chargement initial et lorsque la fenêtre est redimensionnée
        updateScrollAmount();
        window.addEventListener('resize', updateScrollAmount);
        return () => window.removeEventListener('resize', updateScrollAmount);
    }, []);

    // Gérer les cas de chargement et d'erreur
    if (isLoading) {
        return <div>Chargement en cours...</div>;
    }

    if (error) {
        return <div>Une erreur s'est produite : {error.message}</div>;
    }

    const scrollLeft = () => {
        console.log(scrollAmount)
        console.log(containerRef)
        containerRef.current.scrollLeft -= scrollAmount + marginCard;
    };

    const scrollRight = () => {
        console.log(scrollAmount)
        console.log(containerRef)
        containerRef.current.scrollLeft += scrollAmount + marginCard;
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





