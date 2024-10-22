// CardStyles.js
import styled from 'styled-components';

import { configTheme } from '../../utils/theme/configTheme';

const { colors, boxShadow } = configTheme;

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); // Ombre de fond
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; // Assure-toi qu'il est au-dessus des autres éléments
`;

export const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 90%;
    max-width: 500px;
    text-align: center;
`;
export const ContainerButtonHandleLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;
export const Button = styled.button`
  border-radius: 10px;
  border: none;
  color: ${colors.fourth};
  background-color: ${colors.primary};
  padding: 15px;
  min-width: 150px;
  box-shadow: ${boxShadow.shadowLight};
  cursor: pointer;
  transition: filter .3s ease-in, color .2s linear, transform .2s ease-out;

  &:hover {
    transform: scale(1.05);
    filter: ${boxShadow.filterShadow};
    color: white;
  }
`;
