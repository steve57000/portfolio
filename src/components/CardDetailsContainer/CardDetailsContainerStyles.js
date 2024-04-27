import styled from "styled-components";
const chevron = process.env.PUBLIC_URL + '/assets/icons/chevron.png'

export const CardDetailsStyles = styled.div`
  position: relative;
  text-align: left;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  border-radius: 5px;
  padding: 0 10px;
  h2 {
    width: calc(100% + 20px);
    margin-left: -10px;
    padding: 10px 0;
    font-size: 2rem;
    text-align: center;
    color: #ff7e5f;
    background-color: #571845;
    border-radius: 5px 5px 0 0;
    box-shadow: 0 3px 5px rgba(87, 24, 69, 0.47);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ContainerList = styled.div`
  position: relative;
  background-color: #900c3e;
  color: #ff7e5f;
  border-radius: 10px;
  box-shadow: 0 2px 4px #2F3020;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 0 10px;
  width: 100%;
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
  background-image: url(${chevron});
  background-size: contain;
  background-repeat: no-repeat;
`;
export const CardDetailsUl = styled.ul`
  list-style: circle inside;
  color: #571845;
  margin: 0;
  padding: 0 10px;
  width: calc(100% - 4px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardDetailsList = styled.li`
  width: 100%;
  background-color: #ff7e5f;
  text-align: left;
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: inset 0 1px 3px rgba(144, 12, 62, 0.76);
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  img {
    min-width: 280px;
    margin: 1%;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.75);
    border-radius: 1vh;
  }
`