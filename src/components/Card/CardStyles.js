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
  
  @media (max-width: 1600px) {
    padding: 70px 10px;
    gap: 10px;
  }
`;

export const CardTitle = styled.h3`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  padding: 15px 0 15px 0;
  font-size: ${fonts.sizeMedium};
  text-align: center;
  color: ${colors.primary};
  background-color: ${colors.fourth};
  border-radius: 10px 10px 0 0;
  box-shadow: ${boxShadow.shadowInset};
  opacity: 0;
  animation: ${fadeInLeft} 0.5s forwards;
  animation-delay:  0.2s;
`;

export const CardObjectif = styled.h4`
  margin: 10px 0 0 0;
  font-size: ${fonts.sizeSmall};
  color: ${colors.third};
  text-align: center;
  opacity: 0;
  animation: ${fadeInRight} 0.5s forwards;
  animation-delay:  0.3s;

  @media (max-width: 620px) {
    font-size: ${fonts.sizeLightSmall};
  }
`;

export const CardContainerTags = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  opacity: 0;
  animation: ${fadeInZoom} 0.5s forwards;
  animation-delay:  0.4s;
`;

export const CardTags = styled.span`
  font-size: ${fonts.sizeExtraSmall};
  letter-spacing: 1px;
  padding: 8px;
  border-radius: 5px;
  background-color: ${colors.fifth};
  color: ${colors.primary};
  box-shadow: ${boxShadow.shadowLight};
  
  @media (max-width: 1500px) {
    padding: 5px;
  }
`;

export const CardImageContainer = styled.div`
  width: 100%;
  min-height: 280px;
  max-height: 320px;
  border-radius: 5px;
  box-shadow: ${boxShadow.shadowLight};
  background-image: url(${props => require(`../../assets/images/${props.image}`)});
  background-size: cover;
  background-position: top;
  opacity: 0;
  animation: ${fadeInZoom} 0.5s forwards;
  animation-delay:  0.5s;
`;

export const CardSavoirImg = styled.img`
  position: absolute;
  left: 0;
`;

export const CardSavoir = styled.ul`
  margin: 0;
  list-style-type: none;
  position: relative;
  opacity: 0;
  animation: ${fadeInLeft} 0.5s forwards;
  animation-delay: 0.6s;
`;


export const CardSavoirList = styled.li`
  font-size: ${fonts.sizeExtraSmall};
  padding: 3px 0 ;
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
  animation-delay:  0.7s;
  
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