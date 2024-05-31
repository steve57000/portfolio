import styled from 'styled-components';
import { configTheme } from '../../utils/theme/configTheme';

const { colors, fonts } = configTheme
export const Nav = styled.nav`
  text-align: right;
  font-size: 1.2rem;
  ul {
    display: flex;
    flex-direction: row;
    margin: 10px;
    gap: 10px;
    list-style-type: none;
    background-color: ${colors.primary};
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    
    @media (max-width: 767px) {
      gap: 5px;
      margin: 0;
      background: none;
      padding: 0;
      font-size: ${fonts.sizeExtraSmall};
    }
    
    li{
      transition: background-color .3s linear, box-shadow .3s linear,color .3s linear;
      width: 120px;
      border-radius: 10px;
      
      @media (max-width: 767px) {
        width: 100px;
      }
      
      &:hover, &:focus {
        background-color: #900c3e;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.52);
        a{
          color: ${colors.primary};
        }
      }
    }
  }
`;