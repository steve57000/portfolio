import styled from 'styled-components';
import { configTheme  } from '../../utils/theme/configTheme';
const { colors, sizes, fonts, boxShadow } = configTheme;

export const HomeContainer = styled.div`
  max-width: ${sizes.maxWidth};
  padding: ${sizes.padding};
  margin: 0 auto;
  @media (max-width: 767px) {
    padding: ${sizes.paddingMin};
  }
`;

export const PageTitle = styled.h1`
  font-size: ${fonts.sizeLarge};
  margin-bottom: 20px;
  color: ${colors.textDark};
  
  @media (max-width: 767px) {
    font-size: ${fonts.sizeMedium};
  }
`;

export const TitleH2 = styled.h2`
    width: 100%;
    border-radius: 5px;
    background-color: ${colors.fourth};
    color: ${colors.secondary};
    font-weight: 500;
    font-size: 2rem;
    letter-spacing: 2px;
    margin-top: 60px;
    padding: clamp(10px, 1vw, 20px);
    filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.7));
`

export const PageDescription = styled.p`
  font-size: ${fonts.sizeSmall};
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  text-align: justify;
  background: ${colors.backgroundGradient};
  box-shadow: ${boxShadow.shadowLight};
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.backdrop};
  z-index: 999;
`;

export const ContainerProject = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;

  @media(max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 860px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
