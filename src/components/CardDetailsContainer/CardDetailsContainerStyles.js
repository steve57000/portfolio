import styled from "styled-components";
import { configTheme } from "../../utils/theme/configTheme";

const { colors, fonts } = configTheme;

const chevron = process.env.PUBLIC_URL + '/assets/icons/chevron.png';
const chevronPaint = process.env.PUBLIC_URL + '/assets/icons/chevronPaint.png';

const hoverStyles = `
  background-color: ${colors.fifth};
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.52);
  color: ${colors.primary};
`;

export const CardDetailsStyles = styled.div`
  position: relative;
  text-align: left;
  max-width: 1280px;
  margin: 0 auto;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  border-radius: 10px;
  padding: 0 10px 20px 10px;
  z-index: 10000;

  h2 {
    width: calc(100% + 20px);
    margin-left: -10px;
    padding: 10px 0;
    font-size: ${fonts.sizeLarge};
    text-align: center;
    color: ${colors.primary};
    background-color: ${colors.fifth};
    border-radius: 8px 8px 0 0;
    box-shadow: 0 3px 5px rgba(87, 24, 69, 0.47);
  }
`;

export const ButtonStyles = styled.div`
  width: 100%;
  height: 100%;
  min-width: 150px;
  max-width: 300px;
  min-height: 50px;
  text-align: center;
  padding: 15px 30px;
  border-radius: 10px;
  background-color: ${colors.primary};
  color: ${colors.fifth};
  border: none;
  cursor: pointer;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.52);
  transition: background-color 0.3s, color 0.4s, box-shadow 0.3s, transform 0.2s;
  transform-origin: center;

  &:hover {
    transform: scale(1.1);
    ${hoverStyles}
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
`

export const ContainerList = styled.div`
  position: relative;
  background-color: ${colors.primary};
  color: ${colors.fifth};
  border-radius: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.32);
  cursor: pointer;
  padding: 0 10px 0 10px;
  width: 100%;
  max-width: calc(100% / 1.3);
  transition: all 0.3s;
  ${props => props.$isOpen && hoverStyles}

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
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 768px){
    padding: 0 1px;
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

  @media(max-width: 1080px){
    width: 100%;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  img {
    max-width: calc(100% / 2.09);
    margin: 1% ;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.75);
    border-radius: 1vh;
    @media(max-width: 1080px){
      min-width: 100%;
    }
    @media(max-width: 768px){
      min-width: 102%;
    }
    @media(max-width: 620px){
      min-width: 103%;
    }
  }
`;
