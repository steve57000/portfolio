import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle, CardDetailsStyles, ModalBackdrop, DetailMeta, ContainerDescription, DetailGrid, DetailBlock, TagWrap, Tag, ButtonRow, ButtonStyles, LinkButton } from './CardDetailsContainerStyles';

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
        <DetailMeta>{project.role} · {project.status} · {project.period}</DetailMeta>
        <h2 id="project-detail-title">{project.title}</h2>
        <ContainerDescription><p>{project.summary}</p></ContainerDescription>
        <DetailGrid>
          <DetailBlock><strong>Problème</strong><p>{project.problem}</p></DetailBlock>
          <DetailBlock><strong>Solution</strong><p>{project.solution}</p></DetailBlock>
          <DetailBlock><strong>Impact</strong><p>{project.impact}</p></DetailBlock>
        </DetailGrid>
        <TagWrap>{project.stack.map((item) => <Tag key={item}>{item}</Tag>)}</TagWrap>
        <DetailGrid>
          <DetailBlock><strong>Points clés</strong><p>{project.highlights.join(' · ')}</p></DetailBlock>
          <DetailBlock><strong>Compétences</strong><p>{project.skills.join(' · ')}</p></DetailBlock>
          <DetailBlock><strong>Repères</strong><p>{project.metrics.join(' · ')}</p></DetailBlock>
        </DetailGrid>
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
