import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 1280px;
  max-width: 95vw;
  margin: 80px auto 0 auto;
  padding:  120px 0 20px 0;
  gap: 20px;
  font-family: 'Arial, sans-serif',serif;
  color: ${props => props.color || '#333'};
  line-height: 1.8;
`;

export const Title = styled.h1`
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
  font-size: ${props => props.fontSize || '2.5em'};
  color: ${props => props.color || '#2c3e50'};
  background-color: #571845;
  border: 1px solid #571845;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.65);
  margin-bottom: 0;
  
  @media (max-width: 767px) {
    border-radius: 10px 10px 0 0;
  }
`;

export const BorderContainer = styled.div`
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  padding: 30px 20px;
  border-radius: 0 0 20px 20px;
  
  @media (max-width: 767px) {
    border-radius: 0 0 10px 10px;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TwoColumnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const ThreeColumnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const Section = styled.section`
  margin: 20px 0;
  padding: 0 0 20px 0;
  border-top: none;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.49);
`;

export const SectionTitle = styled.h2`
  font-size: ${props => props.fontSize || '1.8em'};
  color: ${props => props.color || '#34495e'};
  border-radius: 10px 10px 0 0;
  padding: 0 20px;
  margin-top: 0;
  background-color: #900c3e;
`;

export const Paragraph = styled.p`
  font-size: ${props => props.fontSize || '1.2em'};
  color: ${props => props.color || '#7f8c8d'};
  padding: 0 20px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0 20px;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const ExperienceItem = styled.div`
  margin-bottom: 15px;
`;

export const Position = styled.h3`
  font-size: ${props => props.fontSize || '1.5em'};
  color: ${props => props.color || '#2980b9'};
`;

export const Company = styled.p`
  font-size: ${props => props.fontSize || '1.2em'};
  color: ${props => props.color || '#8e44ad'};
`;

export const Date = styled.p`
  font-size: ${props => props.fontSize || '1em'};
  color: ${props => props.color || '#95a5a6'};
`;

export const Description = styled.p`
  font-size: ${props => props.fontSize || '1.1em'};
  color: ${props => props.color || '#7f8c8d'};
`;


