import styled from 'styled-components';

export const Nav = styled.nav`
  text-align: right;
  font-size: 1.2rem;
  ul {
    display: flex;
    flex-direction: row;
    margin: 10px;
    gap: 10px;
    list-style-type: none;
    background-color: #ff7e5f;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    transition: all 3s linear;
    
    @media (max-width: 767px) {
      flex-direction: column;
      gap: 5px;
      margin: 0;
    }
    
    li{
      transition: all .3s linear;
      width: 120px;
      border-radius: 10px;
      
      &:hover {
        background-color: #900c3e;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.52);
        color: #ff7e5f;
        a{
          
          color: #ff7e5f;
        }
      }
    }
    
    a{
      display: block;
      width: 100%;
      height: 100%;
      padding: 10px;
      text-decoration: none;
      color: #900c3e;
    }
  }
`;