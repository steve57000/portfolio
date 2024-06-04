import styled from 'styled-components';
import {
    fadeInLeft,
    fadeInRight,
    fadeInSlideDown,
    fadeInZoom
} from '../../utils/stylesKeyframes/stylesKeyframes';
import { configTheme } from '../../utils/theme/configTheme';

const { colors, boxShadow, fonts } = configTheme;

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 20px;
  padding: 70px 20px;
  box-shadow: ${boxShadow.shadowLight};
  max-width: 600px;
  max-height: 90vh;
  width: 100%;
  background: ${colors.backgroundGradient};
  transition: box-shadow 0.3s ease-in-out;
  opacity: 0;
  animation: ${fadeInSlideDown} 0.5s ease forwards;
  animation-delay: ${({ $index }) => $index * 0.3}s; /* Appliquer un délai basé sur l'index */
  margin: 0 auto;

  &:hover {
    box-shadow: ${boxShadow.shadowHigh};
  }
  @media (max-width: 767px) {
    padding: 70px 10px;
    gap: 10px;
  }
`;

export const CardTitle = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  padding: 10px 0 10px 0;
  font-size: ${fonts.sizeLarge};
  text-align: center;
  color: ${colors.primary};
  background-color: ${colors.fourth};
  border-radius: 10px 10px 0 0;
  box-shadow: ${boxShadow.shadowInset};
  opacity: 0;
  animation: ${fadeInLeft} 0.5s forwards;
  animation-delay: ${({ $index }) => $index + 0.2}s;}
`;

export const CardObjectif = styled.h3`
  font-size: ${fonts.sizeRegular};
  margin-bottom: 0;
  width: 100%;
  min-height: 120px;
  color: ${colors.third};
  text-align: center;
  opacity: 0;
  animation: ${fadeInRight} 0.5s forwards;
  animation-delay: ${({ $index }) => $index + 0.3}s;}
  @media (max-width: 767px) {
    font-size: ${fonts.sizeSmall};
    min-height: 90px;
  }
`;

export const CardContainerTags = styled.div`
  position: absolute;
  top: 160px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  opacity: 0;
  animation: ${fadeInZoom} 0.5s forwards;
  animation-delay: ${({ $index }) => $index + 0.4}s;}
  @media (max-width: 767px) {
    top: 140px;
  }
`;

export const CardTags = styled.span`
  font-size: ${fonts.sizeSmall};
  font-weight: bolder;
  padding: 8px;
  border-radius: 5px;
  background-color: ${colors.fifth};
  color: ${colors.sixth};
  box-shadow: ${boxShadow.shadowLight};
  @media (max-width: 767px) {
    padding: 5px;
    font-size: ${fonts.sizeExtraSmall};
  }
`;

export const CardImageContainer = styled.div`
  width: 100%;
  min-height: 280px;
  max-height: 320px;
  border-radius: 5px;
  box-shadow: ${boxShadow.shadowLight};
  background-image: url(${props => process.env.PUBLIC_URL + `/assets/images/${props.image}`});
  background-size: cover;
  background-position: top;
  opacity: 0;
  animation: ${fadeInZoom} 0.5s forwards;
  animation-delay: ${({ $index }) => $index + 0.5}s;}
`;

export const CardSavoir = styled.ul`
  margin: 0;
  list-style-type: none;
  position: relative;
  opacity: 0;
  animation: ${fadeInLeft} 0.5s forwards;
  animation-delay: ${({ $index }) => $index + 0.6}s;}
`;

export const CardSavoirImg = styled.img`
  position: absolute;
  left: 0;
`;

export const CardSavoirList = styled.li`
  font-size: ${fonts.sizeExtraSmall};
  padding: 3px 0 3px 20px;
  margin: .4em 0;
  color: ${colors.fourth};
`;

export const ContainerLink = styled.span`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 40px); // taille 100% moins le padding-left(20px) et gauche(20px) 
  position: absolute;
  bottom: 10px;
  opacity: 0;
  animation: ${fadeInRight} 0.5s forwards;
  animation-delay: ${({ $index }) => $index + 0.7}s;}
  @media (max-width: 767px) {
    width: calc(100% - 20px);
  }
`;

export const CardLink = styled.a`
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% + 5px);
  background-color: ${colors.secondary};
  border-radius: 5px;
  padding: 0 10px 10px 10px;
  text-align: center;
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const ModalContent = styled.div``;

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
  background-color: rgba(255, 87, 51, 0.56);
  padding: 5px;
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

 







