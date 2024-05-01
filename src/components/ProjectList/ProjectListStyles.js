import styled from "styled-components";

export const ContainerProject = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  user-select: none;
`;
export const ContainerProjectCard = styled.div`
  display: flex;
  position: relative;
  flex-wrap: nowrap;
  padding: 30px 30px 40px 30px;
  width: 100%; /* Mettez la largeur à 100% */
  height: 100%; /* Utilisez la hauteur automatique pour permettre le défilement */
  min-height: 100%; /* Ajoutez une hauteur minimale si nécessaire */
  max-height: 96vh;
  border-radius: 10px;
  background-color: rgba(70, 48, 44, 0.18);
  overflow-x: auto;
  overflow-y: hidden; /* Utilisez overflow-y: hidden pour masquer la barre de défilement verticale */
  scrollbar-width: none; /* Masquer la barre de défilement personnalisée pour Firefox */
  -ms-overflow-style: none; /* Masquer la barre de défilement personnalisée pour IE et Edge */
  &::-webkit-scrollbar {
    display: none; /* Masquer la barre de défilement personnalisée pour Chrome, Safari et Opera */
  }
  @media (max-width: 720px){
    padding: 10px 10px 40px 10px;
  }
  @media (max-width: 420px){
    padding: 10px 10px 30px 10px;
  }
`;

export const ScrollBar = styled.div`
  position: absolute;
  bottom: 1%;
  left: 1%;
  width: 98%;
  padding: 3px;
  height: 18px;
  background-color: #ccc;
  border-radius: 6px;
  opacity: 0.7;
  transition: opacity 0.3s;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.84);
  &:hover {
    opacity: 1;
  }
`;

export const ScrollThumb = styled.div`
  position: absolute;
  width: ${props => props.$visibleWidthRatio * 100}%;
  height: 12px;
  background-color: #ba1313;
  border-radius: 4px;
  filter: drop-shadow(0 0 2px rgb(255, 79, 79));
`;

export const BorderContainerProjectCard = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 10px;
  box-shadow: inset 0 0 10px 2px #2F3020;
  background: transparent;
  pointer-events: none;
`;