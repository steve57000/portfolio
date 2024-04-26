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

export const ContainerProject = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
export const BorderContainerProjectCard = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 10px;
  box-shadow: inset 0 0 10px 2px #2F3020;
  z-index: 1;
`;

export const ContainerProjectCard = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 20px 30px 20px 50px;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(70, 48, 44, 0.18);
  overflow-x: auto;
  overflow-y: auto;
  scrollbar-width: none; /* Masquer la barre de défilement personnalisée pour Firefox */
  -ms-overflow-style: none; /* Masquer la barre de défilement personnalisée pour IE et Edge */
  &::-webkit-scrollbar {
    display: none; /* Masquer la barre de défilement personnalisée pour Chrome, Safari et Opera */
  }
  @media (max-width: 720px){
    padding: 20px 10px 20px 30px;
  }
  @media (max-width: 420px){
    padding: 10px 5px 10px 7px;
  }
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

export const ScrollButtonLeft = styled(ArrowButton)`
  left: 10px;
  border-radius: 10px 0 0 10px;
  @media (max-width: 420px){
    left: 0;
  }
`;

export const ScrollButtonRight = styled(ArrowButton)`
  right: 10px;
  border-radius: 0 10px 10px 0;
  @media (max-width: 420px){
    right: 0;
  }
`;