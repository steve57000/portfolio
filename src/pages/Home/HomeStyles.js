import styled from 'styled-components';
import { configTheme  } from '../../utils/theme/configTheme';
const { colors, sizes, fonts } = configTheme;

export const HomeContainer = styled.div`
  max-width: ${sizes.maxWidth};
  padding: ${sizes.padding};
  margin: 0 auto;
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${colors.textDark};
`;

export const PageDescription = styled.p`
  font-size: ${fonts.sizeSmall};
  margin-bottom: 20px;
  text-align: justify;
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
