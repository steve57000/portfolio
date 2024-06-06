import styled from 'styled-components';
import { configTheme } from '../../utils/theme/configTheme';
import {fadeInRight, fadeInLeft, fadeInSlideDown, fadeInSlideUp} from "../../utils/stylesKeyframes/stylesKeyframes";

const { colors, borders, fonts, sizes, boxShadow } = configTheme;

export const Container = styled.div`
  position: relative;
  width: ${sizes.maxWidth};
  max-width: 95vw;
  margin: 4% auto 0 auto;
  padding-top: 100px;
  font-family: 'Arial, sans-serif', serif;
  color: ${colors.primary};
  line-height: 1.8;
  opacity: 0;
  animation: ${fadeInSlideDown} 2s ease forwards;
`;

export const Title = styled.h1`
  position: absolute;
  top: 5px;
  width: 100%;
  text-align: center;
  font-size: ${fonts.sizeLarge};
  letter-spacing: 3px;
  color: ${colors.primary};
  background-color: ${colors.fourth};
  border-bottom: ${borders.solid};
  border-radius: 20px 20px 0 0;
  margin-bottom: 0;
  padding: 10px 0;
  box-shadow:  ${boxShadow.shadowInset};
  opacity: 0;
  animation: ${fadeInLeft} 1s ease forwards;
  animation-delay: 0.5s;

  @media (max-width: 767px) {
    border-radius: 10px 10px 0 0;
  }
`;

export const BorderContainer = styled.div`
  background: ${colors.backgroundGradient};
  padding: 30px 3%;
  border-radius: 0 0 20px 20px;

  @media (max-width: 767px) {
    border-radius: 0 0 10px 10px;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: 0;
  animation: ${fadeInSlideUp} 0.5s ease forwards;
  animation-delay: 0.6s;
`;

export const TwoColumnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  opacity: 0;
  animation: ${fadeInSlideUp} 0.5s ease forwards;
  animation-delay: 0.6s;
`;

export const ThreeColumnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  opacity: 0;
  animation: ${fadeInSlideUp} 0.5s ease forwards;
  animation-delay: 0.6s;
`;

export const Section = styled.section`
  margin: 20px 0;
  padding: 0 0 20px 0;
  border-top: none;
  border-radius: 10px;
  box-shadow: ${boxShadow.shadowLight};
  background: ${colors.backgroundGradientLight};
`;

export const SectionTitleIcon = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 15px;
  margin-top: -5px;
`;

export const SectionTitle = styled.h2`
  font-size: ${fonts.sizeMedium};
  letter-spacing: 2px;
  color: ${colors.primary};
  border-radius: 10px 10px 0 0;
  padding: 5px 0 0 15px;
  margin: 0;
  background-color: ${colors.fifth};
  opacity: 0;
  animation: ${fadeInLeft} 0.5s ease forwards;
  animation-delay: 0.7s;
  display: flex; /* Ajout */
  align-items: center; /* Ajout */
`;


export const Paragraph = styled.p`
  font-size: ${fonts.sizeRegular};
  color: ${colors.fourthLight};
  padding: 0 20px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0 20px;
  opacity: 0;
  animation: ${fadeInSlideUp} 0.5s ease forwards;
  animation-delay: 0.8s;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  color: ${colors.fourthLight};
  opacity: 0;
  animation: ${fadeInRight} 0.6s ease forwards;
  animation-delay: 0.9s;
`;

export const ListItemBorder = styled(ListItem)`
  border-bottom: ${borders.dashed};
`;

export const ExperienceItem = styled.div`
  margin-bottom: 15px;
  border-bottom: ${borders.dashed};
  opacity: 0;
  animation: ${fadeInSlideUp} 0.5s ease forwards;
  animation-delay: 1s;
`;

export const Position = styled.h3`
  font-size: ${fonts.sizeRegular};
  color: ${colors.fourth};
  letter-spacing: 1px;
`;

export const Company = styled.p`
  margin-top: -20px;
  font-size: ${fonts.sizeSmall};
  color: ${colors.fourthLight};
  letter-spacing: 1px;
`;

export const Date = styled.p`
  margin-top: -20px;
  font-size: ${fonts.sizeExtraSmall};
  color: ${colors.sixthLight};
`;

export const Description = styled.p`
  font-size: ${fonts.sizeSmall};
  color: ${colors.fifth};
  line-height: 1.2;
`;
