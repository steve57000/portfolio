import React, { useRef, useState, useEffect } from 'react';
import Card from '../Card/Card';
import {
    ContainerProjectCard,
    ContainerProject,
    BorderContainerProjectCard,
    ScrollBar,
    ScrollThumb,
} from './ProjectListStyles';
import PropTypes from "prop-types";

const ProjectList = ({ data = [], handleMoreInfoClick = () => {} }) => {
    const containerRef = useRef(null);
    const thumbRef = useRef(null);
    const [visibleWidthRatio, setVisibleWidthRatio] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(0);
    const [scrollStartX, setScrollStartX] = useState(0);

    const calculateVisibleWidthRatio = () => {
        const container = containerRef.current;
        if (container) {
            const visibleWidth = container.clientWidth;
            const totalWidth = container.scrollWidth ;
            const ratio = visibleWidth / totalWidth ;
            setVisibleWidthRatio(ratio);
        }
    };

    const handleScroll = () => {
        const container = containerRef.current;
        const scrollRatio = (container.scrollLeft + 10) / (container.scrollWidth - (container.clientWidth - 130));
        const thumbWidth = container.clientWidth * visibleWidthRatio;
        const thumbLeft = scrollRatio * (container.clientWidth - thumbWidth);

        if (visibleWidthRatio !== 1) { // Ajoutez cette condition
            thumbRef.current.style.width = `${thumbWidth}px`;
            thumbRef.current.style.left = `${thumbLeft}px`;
        }
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setDragStartX(e.clientX);
        setScrollStartX(containerRef.current.scrollLeft);
        const thumbWidth = containerRef.current.clientWidth * visibleWidthRatio;
        thumbRef.current.style.width = `${thumbWidth}px`;
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const container = containerRef.current;
        const dragOffset = e.clientX - dragStartX;
        const containerWidth = container.clientWidth;
        const thumbWidth = containerWidth * visibleWidthRatio;
        const scrollableWidth = container.scrollWidth - containerWidth;
        const scrollRatio = dragOffset / (containerWidth - thumbWidth);
        const scrollDistance = scrollableWidth * scrollRatio;

        container.scrollLeft = scrollStartX + scrollDistance;
        handleScroll();
    };

    useEffect(() => {
        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
        // eslint-disable-next-line
    }, [isDragging]);

    useEffect(() => {
        calculateVisibleWidthRatio();

        window.addEventListener('resize', calculateVisibleWidthRatio);
        return () => window.removeEventListener('resize', calculateVisibleWidthRatio);
    }, []);

    useEffect(() => {
        calculateVisibleWidthRatio();
        // eslint-disable-next-line
        handleScroll();
        // eslint-disable-next-line
    }, [data]);

    return (
        <ContainerProject>
            <ContainerProjectCard ref={containerRef} onScroll={handleScroll} >
                <>
                    {data.map((project, index) => (
                        <Card
                            key={project.id}
                            title={project.title}
                            objectif={project.objectif}
                            tags={Array.isArray(project.tags) ? project.tags : []}
                            image={project.images}
                            savoir={Array.isArray(project.savoir) ? project.savoir : []}
                            websiteUrl={project.websiteUrl}
                            onClickMoreInfo={() => handleMoreInfoClick(project.id)}
                            cardMarginRight={index < data.length - 1 ? 2 : 0}
                        />
                    ))}
                </>
            </ContainerProjectCard>
            <ScrollBar>
                <ScrollThumb
                    ref={thumbRef}
                    $visibleWidthRatio={visibleWidthRatio}
                    onMouseDown={(e) => {
                        handleMouseDown(e)
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseUp={() => setIsDragging(false)}
                />
            </ScrollBar>
            <BorderContainerProjectCard />
        </ContainerProject>
    );
};

ProjectList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            objectif: PropTypes.string.isRequired,
            tags: PropTypes.arrayOf(PropTypes.string),
            images: PropTypes.string,
            savoir: PropTypes.arrayOf(PropTypes.string),
            websiteUrl: PropTypes.string,
        })
    ).isRequired,
    handleMoreInfoClick: PropTypes.func.isRequired,
};

export default ProjectList;
