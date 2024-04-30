import React, { useRef, useState, useEffect } from 'react';
import Card from '../Card/Card';
import {
    ContainerProjectCard,
    CardWrapper,
    ScrollButtonLeft,
    ScrollButtonRight,
    ContainerProject, BorderContainerProjectCard,
} from './ProjectListStyles';

const ProjectList = ({ data, handleMoreInfoClick }) => {
    const containerRef = useRef(null);
    const [scrollAmount, setScrollAmount] = useState(400);
    const marginCard = 20;

    useEffect(() => {
        const updateScrollAmount = () => {
            const cardWidth = containerRef.current?.firstChild?.offsetWidth;
            if (cardWidth) {
                setScrollAmount(cardWidth);
            }
        };

        updateScrollAmount();
        window.addEventListener('resize', updateScrollAmount);
        return () => window.removeEventListener('resize', updateScrollAmount);
    }, []);

    const scrollLeft = () => {
        containerRef.current.scrollLeft -= scrollAmount - marginCard;
    };

    const scrollRight = () => {
        containerRef.current.scrollLeft += scrollAmount - marginCard;
    };

    return (
        <ContainerProject>
            <ContainerProjectCard ref={containerRef}>
                {data.map((project, index) => (
                    <CardWrapper
                        key={project.id}
                        $cardMarginRight={index < data.length - 1 ? 20 : 2}
                    >
                        <Card
                            key={project.id}
                            title={project.title}
                            objectif={project.objectif}
                            tags={Array.isArray(project.tags) ? project.tags : []}
                            image={project.images}
                            savoir={Array.isArray(project.savoir) ? project.savoir : []}
                            websiteUrl={project.websiteUrl}
                            onClickMoreInfo={() => handleMoreInfoClick(project.id)}
                        />
                    </CardWrapper>
                ))}
                <ScrollButtonLeft onClick={scrollLeft} tabIndex={1} aria-label="Défiler vers la gauche" role="button">
                    &lt;
                </ScrollButtonLeft>
                <ScrollButtonRight onClick={scrollRight} tabIndex={1} aria-label="Défiler vers la droite" role="button">
                    &gt;
                </ScrollButtonRight>
            </ContainerProjectCard>
            <BorderContainerProjectCard></BorderContainerProjectCard>
        </ContainerProject>
    );
};

export default ProjectList;
