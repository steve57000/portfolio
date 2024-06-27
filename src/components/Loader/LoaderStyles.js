import styled from 'styled-components';
import {colorChange, dots, spin,} from './LoaderKeyframes'
// Style pour le conteneur du loader en pleine page
export const FullPageLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Fond légèrement transparent */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Pour être sûr que le loader soit au-dessus de tout le reste */
`;

// Style pour l'élément du loader
export const Loader = styled.div`
  border: 16px solid #ff7e5f;
  border-top: 16px solid #571845;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

// Style pour le texte de chargement
export const LoadingText = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: #ffc300;
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* Animation des points de suspension */
  &:after {
    content: '...';
    animation: ${dots} 1s steps(5, end) infinite;
  }
`;

// Composant pour chaque lettre
export const Letter = styled.span`
  display: inline-block;
  animation: ${colorChange} 1s linear infinite;
  animation-delay: ${({ $delay }) => $delay};
`;