import styled from 'styled-components';

export const HomeContainer = styled.div`
  max-width: 1920px;
  padding: 2vw;
  margin: 0 auto;
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333; /* Texte en gris foncé */
`;

export const PageDescription = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
  text-align: justify;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`