import styled, {createGlobalStyle} from "styled-components";
import { configTheme } from "../../utils/theme/configTheme";
import { fadeInSlideDown, fadeInSlideUp } from "../../utils/stylesKeyframes/stylesKeyframes";

import MyFontText from '../../assets/fonts/Merriweather-Regular.ttf';

const { colors, fonts } = configTheme;

const chevron = require('../../assets/icons/chevron.png');
const chevronPaint = require('../../assets/icons/chevronPaint.png');

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MyFontText';
    src: url(${MyFontText}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

const hoverStyles = `
  background-color: ${colors.fifth};
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.52);
  color: ${colors.primary};
`;

export const CardDetailsStyles = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  border-radius: 10px;
  padding: 0 10px 20px 10px;
  z-index: 10000;

  @media (max-width: 767px) {
    padding: 0 5px 20px 5px;
  }

  h2 {
    width: calc(100% + 20px);
    margin: -20px -10px 0 -10px;
    padding: 10px 0;
    font-size: ${fonts.sizeLarge};
    text-align: center;
    color: ${colors.primary};
    background-color: ${colors.fifth};
    border-radius: 8px 8px 0 0;
    box-shadow: 0 3px 5px rgba(87, 24, 69, 0.47);

    @media (max-width: 767px) {
      width: calc(100% + 12px);
      margin: -20px -6px 0 -6px;
    }
  }
`;

export const ContainerDescription = styled.div`
  width: 100%;
  max-width: calc(100% / 1.3);
  margin: 0 auto;
  
  h3 {
    font-family: 'MyFontText', serif;
  }
  
  @media(max-width: 1080px){
    max-width: 90%;
  }
  
  @media(max-width: 720px){
    max-width: 99%;
  }
`

export const ButtonStyles = styled.div`
  width: 250px;
  height: 50px;
  border-radius: 10px;
  background-color: ${colors.primary};
  color: ${colors.fifth};
  border: none;
  cursor: pointer;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.52);
  transition: background-color 0.3s, color 0.4s, box-shadow 0.3s, transform 0.2s;
  opacity: 0;
  animation: ${fadeInSlideUp} 0.5s ease forwards;
  animation-delay: 1s;
  transform-origin: center;
  text-align: center;
  font-weight: bold;
  
  &:hover {
    ${hoverStyles};
  }

  &:focus {
    outline: none;
    ${hoverStyles}
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 767px) {
    gap: 10px;
  }
`

export const ContainerList = styled.div`
  position: relative;
  background-color: ${colors.primary};
  color: ${colors.fifth};
  border-radius: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.32);
  cursor: pointer;
  padding: 0 10px;
  width: 100%;
  max-width: calc(100% / 1.3);
  transition: all 0.3s;
  opacity: 0;
  animation: ${fadeInSlideDown} 0.5s ease forwards;
  animation-delay: ${({ $index }) => $index * 0.2}s;
  ${props => props.$isOpen && hoverStyles};
  
  &:hover {
    ${hoverStyles}
    span{
      background-image: url(${chevron});
    }
  }

  &:focus {
    outline: none;
    ${hoverStyles}
    span{
      background-image: url(${chevron});
    }
  }

  @media(max-width: 1080px){
    max-width: 90%;
  }

  @media (max-width: 767px) {
    padding: 0 5px;
  }

  @media(max-width: 720px){
    max-width: 99%;
  }

  h4 {
    margin-bottom: 0;
  }
`;

export const Chevron = styled.span`
  position: absolute;
  top: 15px;
  right: 10px;
  width: 32px;
  height: 32px;
  transform: ${({ $isRotated }) => $isRotated ? 'rotate(-90deg)' : 'rotate(90deg)'};
  transition: transform 0.3s ease;
  background-image: ${({ $isRotated }) => $isRotated ? `url(${chevron})` : `url(${chevronPaint})`};
  background-size: contain;
  background-repeat: no-repeat;
`;

export const CardDetailsUl = styled.ul`
  list-style: circle inside;
  color: ${colors.fourth};
  margin: 0;
  padding: 0 5px 20px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media(max-width: 768px){
    padding: 0 1px 15px 1px;
  }
`;

export const CardDetailsList = styled.li`
  width: calc(100% - 1.5%);
  background-color: ${colors.primary};
  text-align: left;
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: inset 0 1px 3px rgba(144, 12, 62, 0.76);
  opacity: 0;
  animation: ${fadeInSlideUp} 0.5s ease forwards;
  animation-delay: ${({ $index }) => $index * 0.3}s;
  @media(max-width: 1080px){
    width: 100%;
  }
`;
