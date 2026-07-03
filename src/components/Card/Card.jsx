import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer, CardMedia, CardImage, CardTop, CardTitle, CardObjectif, CardContainerTags, CardTags, CategoryPill, HighlightList, HighlightItem, ContainerLink, CardLink } from './CardStyles';

const labels = { 'fullstack': 'Fullstack', 'data-bi': 'Data / BI', frontend: 'Front-end', tools: 'Outils', archives: 'Archive' };

const Card = ({ project, onClickMoreInfo }) => {
  const stack = Array.isArray(project.stack) ? project.stack : [];
  const highlights = Array.isArray(project.highlights) ? project.highlights : [];
  const links = project.links || {};

  return (
    <CardContainer id={`card-${project.id}`} $accent={project.accent} tabIndex={-1}>
      <CardMedia $accent={project.accent}>
        <CardImage src={project.image} alt={project.imageAlt || `Aperçu du projet ${project.title}`} loading="lazy" />
      </CardMedia>
      <CardTop>
        <div>
          <CardTitle>{project.title}</CardTitle>
          <CardObjectif>{project.summary}</CardObjectif>
        </div>
        <CategoryPill>{labels[project.category] || project.category}</CategoryPill>
      </CardTop>
      <CardContainerTags>
        {stack.slice(0, 7).map((tag) => <CardTags key={tag}>{tag}</CardTags>)}
      </CardContainerTags>
      {highlights.length > 0 && (
        <HighlightList>
          {highlights.slice(0, 4).map((item) => <HighlightItem key={item} $accent={project.accent}>{item}</HighlightItem>)}
        </HighlightList>
      )}
      <ContainerLink>
        <CardLink as="button" type="button" onClick={() => onClickMoreInfo(project.id)} $accent={project.accent}>Étude rapide</CardLink>
        {links.repo && <CardLink href={links.repo} target="_blank" rel="noreferrer" $accent={project.accent}>GitHub</CardLink>}
        {links.demo && <CardLink href={links.demo} target="_blank" rel="noreferrer" $accent={project.accent}>Voir le site</CardLink>}
      </ContainerLink>
    </CardContainer>
  );
};

Card.propTypes = { project: PropTypes.object.isRequired, onClickMoreInfo: PropTypes.func.isRequired };
export default Card;
