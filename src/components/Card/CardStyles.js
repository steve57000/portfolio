import styled from 'styled-components';
export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  min-width: 400px;
  max-width: 450px;
  width: 100%;
  height: 620px;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  @media(max-width: 720px){
    min-width: 360px;
  }
`;

export const CardTitle = styled.h2`
  width: calc(100% + 40px);
  margin: 0 -20px;
  padding: 8px 0 5px 0;
  font-size: 1.8rem;
  text-align: center;
  color: #ff7e5f;
  background-color: #571845;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 3px 5px rgba(87, 24, 69, 0.47);
`;
export const CardObjectif = styled.p`
  width: 100%;
  color: #c70039;
  text-align: center;
`;

export const CardContainerTags = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const CardTags = styled.span`
  font-size: 0.8rem;
  font-weight: bolder;
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: #900c3e;
  color: #c70039;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.42);
`;

export const CardImageContainer = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(127, 23, 4, 0.7);
  background-image: url(${props => process.env.PUBLIC_URL + `/assets/images/${props.image}`});
  background-size: cover;
  background-position: top;
`;

export const CardSavoir = styled.ul`
  margin: 0;
  padding: 20px 0;
  list-style-type: none;
  text-align: justify;
  position: relative;
`;

export const CardSavoirImg = styled.img`
  position: absolute;
  left: 0;
  padding-top: 2px;
`;

export const CardSavoirList = styled.li`
  font-size: 13px;
  padding: 3px 0 3px 20px;
  margin: .4em 0;
  color: #571845;
`;

export const ContainerLink = styled.span`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 40px); // taille 100% moins le padding-left(20px) et gauche(20px) 
  position: absolute;
  bottom: 10px;
`;

export const CardLink = styled.a`
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
  z-index: 10;
  &:hover {
    text-decoration: underline;
  }
`;

export const Modal = styled.div`
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% + 5px);
  background-color: rgba(254, 180, 123, 1);
  border-radius: 5px;
  padding: 0 10px 10px 10px;
  text-align: center;
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.2);
  z-index: 10;
  p{
    color: #900c3e;
    font-weight: 500;
  }
`;

export const ModalContent = styled.div`
    /* Ajoutez des styles au contenu de la modale */
`;

export const ContainerButtonHandleLink = styled.div`
    /* Ajoutez des styles au contenu de la modale */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  border-radius: 10px;
  border: none;
  color: #571845;
  background-color: rgba(255, 87, 51, 0.56);
  padding: 5px;
  min-width: 150px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.23);
  cursor: pointer;
  transition: filter .3s ease-in, color .2s linear, transform .2s ease-out;

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 0 rgba(255, 87, 51, 0.86));
    color: white;
  }
`;






