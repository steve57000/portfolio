import React, { useState, useEffect } from 'react';
import useDataFetching from '../../utils/hooks/useData';
import CardDetailsContainer from '../../components/CardDetailsContainer/CardDetailsContainer';
import { ContainerProject, HomeContainer, ModalBackdrop, PageTitle, PageDescription, TitleH2 } from './HomeStyles';
import { mockData } from "../../data/mockData";
import Card from "../../components/Card/Card";
import { useInitial } from '../../utils/hooks/useInitial';
import LoadingScreen from "../../components/Loader/Loader";

const Home = () => {
    const { data, isLoading, error } = useDataFetching(mockData);
    const { loading, error: initialError } = useInitial(); // Utilisation du hook
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
            const cardElement = document.getElementById(`card-${selectedCardIdRef}`);

            if (cardElement) {
                cardElement.scrollIntoView({ behavior: 'smooth' });
                cardElement.focus();
            }
        }
        setSelectedCardIdRef(null); // Réinitialiser l'identifiant de référence
    };

    // Gestion des états de chargement et d'erreur globaux
    if (loading || isLoading) {
        return <LoadingScreen />;
    }

    if (initialError || error) {
        return <div>Une erreur s'est produite : {initialError ? initialError.message : error.message}</div>;
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
                    <p style={{textAlign: 'center', color: 'darkred'}}>( Portfolio en cour de création... )</p>
                    <section>
                        <TitleH2>Présentation :</TitleH2>
                        <PageDescription>Je suis Steve Bell, un développeur web frontend passionné à la recherche de nouvelles opportunités professionnelles. Fort de plusieurs années d'expérience dans divers domaines techniques, j'ai acquis des compétences solides en développement web, notamment en utilisant des technologies telles que HTML, CSS, JavaScript, React.js et Vue.js. Mon objectif est de continuer à évoluer dans le domaine du développement web et de contribuer à des projets innovants et stimulants.</PageDescription>
                    </section>
                    <section>
                        <TitleH2>Mes Projets :</TitleH2>
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
                                        fonction={Array.isArray(project.fonction) ? project.fonction : []}
                                        websiteUrl={project.websiteUrl}
                                        onClickMoreInfo={() => handleMoreInfoClick(project.id)}
                                    />
                                ))}
                            </>
                        </ContainerProject>
                    </section>
                </>
            )}
        </HomeContainer>
    );
};

export default Home;
