import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle, CardDetailsStyles, ModalBackdrop, DetailMeta, ContainerDescription, DetailHero, DetailImage, DetailGrid, DetailBlock, ListBlock, TagWrap, Tag, ButtonRow, ButtonStyles, LinkButton } from './CardDetailsContainerStyles';

const renderList = (items) => Array.isArray(items) && items.length > 0 ? <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul> : null;
const renderTextBlock = (title, text) => text ? <DetailBlock><strong>{title}</strong><p>{text}</p></DetailBlock> : null;
const renderListBlock = (title, items) => Array.isArray(items) && items.length > 0 ? <ListBlock><strong>{title}</strong>{renderList(items)}</ListBlock> : null;

const CardDetailsContainer = ({ project, onClose }) => {
  const closeRef = useRef(null);
  useEffect(() => {
    closeRef.current?.focus();
    const onKeyDown = (event) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <>
      <GlobalStyle />
      <ModalBackdrop onClick={onClose} />
      <CardDetailsStyles role="dialog" aria-modal="true" aria-labelledby="project-detail-title">
        <DetailMeta>{[project.role, project.status, project.period].filter(Boolean).join(' · ')}</DetailMeta>
        <h2 id="project-detail-title">{project.title}</h2>
        {project.summary && <ContainerDescription><p>{project.summary}</p></ContainerDescription>}
        {project.image && <DetailHero><DetailImage src={project.image} alt={project.imageAlt || `Aperçu du projet ${project.title}`} /></DetailHero>}
        <DetailGrid>
          {renderTextBlock('Contexte', project.context)}
          {renderTextBlock('Problème', project.problem)}
          {renderTextBlock('Solution', project.solution)}
          {renderTextBlock('Impact', project.impact)}
          {renderTextBlock('Apprentissage', project.learned)}
        </DetailGrid>
        <DetailGrid>
          {renderListBlock('Livrables', project.deliverables)}
          {renderListBlock('Décisions techniques', project.decisions)}
          {renderListBlock('Points clés', project.highlights)}
          {renderListBlock('Compétences', project.skills)}
          {renderListBlock('Repères', project.metrics)}
        </DetailGrid>
        {!!project.stack?.length && <TagWrap>{project.stack.map((item) => <Tag key={item}>{item}</Tag>)}</TagWrap>}
        <ButtonRow>
          {project.links?.repo && <LinkButton href={project.links.repo} target="_blank" rel="noreferrer">Ouvrir le repository</LinkButton>}
          {project.links?.demo && <LinkButton href={project.links.demo} target="_blank" rel="noreferrer">Ouvrir le site</LinkButton>}
          <ButtonStyles ref={closeRef} type="button" onClick={onClose}>Fermer</ButtonStyles>
        </ButtonRow>
      </CardDetailsStyles>
    </>
  );
};

CardDetailsContainer.propTypes = { project: PropTypes.object, onClose: PropTypes.func.isRequired };
export default CardDetailsContainer;
