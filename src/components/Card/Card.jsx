import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer, CardTop, CardTitle, CardObjectif, CardContainerTags, CardTags, CategoryPill, HighlightList, HighlightItem, ContainerLink, CardLink } from './CardStyles';

const labels = { 'fullstack': 'Fullstack', 'data-bi': 'Data / BI', frontend: 'Front-end', tools: 'Outils', archives: 'Archive' };

const Card = ({ project, onClickMoreInfo }) => (
  <CardContainer id={`card-${project.id}`} $accent={project.accent} tabIndex={-1}>
    <CardTop>
      <div>
        <CardTitle>{project.title}</CardTitle>
        <CardObjectif>{project.summary}</CardObjectif>
      </div>
      <CategoryPill>{labels[project.category] || project.category}</CategoryPill>
    </CardTop>
    <CardContainerTags>
      {project.stack.slice(0, 7).map((tag) => <CardTags key={tag}>{tag}</CardTags>)}
    </CardContainerTags>
    <HighlightList>
      {project.highlights.slice(0, 4).map((item) => <HighlightItem key={item} $accent={project.accent}>{item}</HighlightItem>)}
    </HighlightList>
    <ContainerLink>
      <CardLink as="button" type="button" onClick={() => onClickMoreInfo(project.id)} $accent={project.accent}>Étude rapide</CardLink>
      {project.links?.repo && <CardLink href={project.links.repo} target="_blank" rel="noreferrer" $accent={project.accent}>GitHub</CardLink>}
      {project.links?.demo && <CardLink href={project.links.demo} target="_blank" rel="noreferrer" $accent={project.accent}>Voir le site</CardLink>}
    </ContainerLink>
  </CardContainer>
);

Card.propTypes = { project: PropTypes.object.isRequired, onClickMoreInfo: PropTypes.func.isRequired };
export default Card;
