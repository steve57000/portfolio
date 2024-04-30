import styled from "styled-components";
import {ArrowButton} from "../../pages/Home/HomeStyles";

export const ContainerProject = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
export const ContainerProjectCard = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 20px 30px 20px 50px;
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 96vh;
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
export const CardWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 100%;
  height: 620px;
  margin-right: ${({ $cardMarginRight }) => $cardMarginRight}px;
  z-index: 20;
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

export const BorderContainerProjectCard = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 10px;
  box-shadow: inset 0 0 10px 2px #2F3020;
  background: transparent;
  z-index: 10;
`;