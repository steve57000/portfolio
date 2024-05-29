import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 767px) {
    border-radius:  0 0 10px 0;
    padding:  0 0 0 10px;
  }
`;

export const Logo = styled.img`
  width: 250px;
  height: auto;
  margin-bottom: 20px;
`;
