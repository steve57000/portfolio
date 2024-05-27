import React, { useRef } from 'react';
import Card from '../Card/Card';
import {
    ContainerProject,
} from './ProjectListStyles';
import PropTypes from "prop-types";

const ProjectList = ({ data = [], handleMoreInfoClick = id => id }) => {
    const containerRef = useRef(null);

    return (
        <ContainerProject ref={containerRef}>
                <>
                    {data.map((project) => (
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
                    ))}
                </>
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
