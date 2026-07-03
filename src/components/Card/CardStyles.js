import styled from 'styled-components';

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 100%;
  border: 1px solid #d8d1c5;
  border-radius: 26px;
  padding: 16px;
  background: rgba(255,250,240,.82);
  box-shadow: 0 18px 44px rgba(17,25,29,.07);
  overflow: hidden;
  border-top: 6px solid ${({ $accent }) => $accent || '#2d7f82'};
  transition: transform .2s ease, box-shadow .2s ease;
  &:hover { transform: translateY(-4px); box-shadow: 0 22px 60px rgba(17,25,29,.12); }
`;


export const CardMedia = styled.div`
  position: relative;
  min-height: 170px;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(135deg, ${({ $accent }) => $accent || '#2d7f82'}22, rgba(17,25,29,.08));
  border: 1px solid rgba(17,25,29,.08);
`;

export const CardImage = styled.img`
  width: 100%;
  height: 190px;
  display: block;
  object-fit: cover;
  object-position: center;
  filter: saturate(.96) contrast(1.02);
`;

export const CardTop = styled.div`
  display: flex; justify-content: space-between; gap: 18px; align-items: start; padding: 0 6px;
`;

export const CardTitle = styled.h3`
  color: #11191d;
  font-size: 1.45rem;
  line-height: 1.1;
  margin: 0 0 8px;
`;

export const CardObjectif = styled.p`
  color: #536168;
  line-height: 1.6;
  margin: 0;
`;

export const CategoryPill = styled.span`
  white-space: nowrap;
  color: #fffaf0;
  background: #11191d;
  border-radius: 999px;
  padding: 7px 10px;
  font-size: .78rem;
  font-weight: 800;
`;

export const CardContainerTags = styled.div`
  display: flex; flex-wrap: wrap; gap: 8px; padding: 0 6px;
`;

export const CardTags = styled.span`
  border: 1px solid #cdd3d4;
  color: #243238;
  background: rgba(255,255,255,.62);
  border-radius: 999px;
  padding: 7px 10px;
  font-size: .82rem;
  font-weight: 700;
`;

export const HighlightList = styled.ul`
  list-style: none; padding: 0 6px; margin: 0; display: grid; gap: 7px;
`;

export const HighlightItem = styled.li`
  color: #2f3d43;
  display: flex; gap: 8px; align-items: baseline;
  &::before { content: '•'; color: ${({ $accent }) => $accent || '#2d7f82'}; font-weight: 900; }
`;

export const ContainerLink = styled.div`
  display: flex; flex-wrap: wrap; gap: 10px; margin-top: auto; padding: 0 6px 6px;
`;

export const CardLink = styled.a`
  color: #11191d;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #bac5c7;
  background: #fffaf0;
  border-radius: 999px;
  padding: 10px 13px;
  font-weight: 800;
  &:hover { border-color: ${({ $accent }) => $accent || '#2d7f82'}; }
`;
