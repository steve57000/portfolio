import styled from 'styled-components';
import { configTheme } from '../../utils/theme/configTheme';

const { sizes, colors } = configTheme
export const HeaderContainer = styled.header`
  width: 100%;
  background: ${colors.backgroundGradient};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 767px) {
    border-radius:  0 0 10px 0;
    padding:  0;
  }
`;
export const HeaderSize = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${sizes.maxWidth};
  margin: 0 auto;
  padding: 10px;
  @media (max-width: 767px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const Logo = styled.img`
  width: 250px;
  height: auto;
  margin-bottom: 20px;
`;
