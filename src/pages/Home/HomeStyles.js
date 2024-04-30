import styled from 'styled-components';

export const HomeContainer = styled.div`
  max-width: 1440px;
  padding: 2vw;
  margin: 0 auto;
  background: rgba(254, 180, 123, 0.53);
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

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  font-weight: bold;
  font-size: 30px;
  background-color: rgba(255, 255, 255, 0.4);
  color: rgba(51, 51, 51, 0.4);
  border: none;
  cursor: pointer;
  z-index: 1000;
  &:hover, &:focus-visible {
    background-color: rgba(255, 255, 255, 0.8);
    color: rgba(51, 51, 51, 0.8);
  }
`;
