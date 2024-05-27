import styled from "styled-components";

export const ContainerProject = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  @media(max-width: 1280px){
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media(max-width: 860px){
    grid-template-columns: repeat(1, 1fr);
  }
`;