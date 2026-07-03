import styled, { createGlobalStyle } from 'styled-components';

export const GlobalPortfolioStyle = createGlobalStyle`
  html { scroll-behavior: smooth; }
  body { background: #f3efe7; color: #172126; }
  * { box-sizing: border-box; }
  a, button { font: inherit; }
  a:focus-visible, button:focus-visible { outline: 3px solid #c7783d; outline-offset: 4px; }
`;

export const HomeContainer = styled.main`
  background:
    linear-gradient(90deg, rgba(24,33,38,.05) 1px, transparent 1px),
    linear-gradient(180deg, rgba(24,33,38,.05) 1px, transparent 1px),
    #f3efe7;
  background-size: 44px 44px;
  min-height: 100vh;
`;

export const Section = styled.section`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 74px 0;
`;

export const Hero = styled.section`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 92px 0 64px;
  display: grid;
  grid-template-columns: 1.25fr .75fr;
  gap: 34px;
  align-items: stretch;
  @media (max-width: 900px) { grid-template-columns: 1fr; padding-top: 56px; }
`;

export const Eyebrow = styled.p`
  color: #2d7f82;
  font-weight: 800;
  letter-spacing: .14em;
  text-transform: uppercase;
  margin: 0 0 14px;
`;

export const PageTitle = styled.h1`
  font-size: clamp(2.6rem, 8vw, 6.8rem);
  line-height: .92;
  letter-spacing: -.07em;
  color: #11191d;
  margin: 0;
`;

export const HeroTitle = styled.h2`
  font-size: clamp(1.35rem, 3vw, 2.6rem);
  max-width: 820px;
  line-height: 1.08;
  color: #243238;
  margin: 24px 0 0;
`;

export const PageDescription = styled.p`
  max-width: 760px;
  color: #425057;
  font-size: 1.12rem;
  line-height: 1.75;
`;

export const CtaRow = styled.div`
  display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px;
`;

export const ButtonLink = styled.a`
  border: 1px solid ${({ $variant }) => $variant === 'dark' ? '#11191d' : '#bac5c7'};
  background: ${({ $variant }) => $variant === 'dark' ? '#11191d' : 'rgba(255,255,255,.58)'};
  color: ${({ $variant }) => $variant === 'dark' ? '#fffaf0' : '#172126'};
  text-decoration: none;
  padding: 13px 18px;
  border-radius: 999px;
  font-weight: 800;
  box-shadow: 0 12px 24px rgba(17,25,29,.08);
  transition: transform .2s ease, border-color .2s ease;
  &:hover { transform: translateY(-2px); border-color: #2d7f82; }
`;

export const HeroPanel = styled.aside`
  background: #11191d;
  color: #fffaf0;
  border-radius: 28px;
  padding: 28px;
  min-height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 24px 70px rgba(17,25,29,.22);
`;

export const SignalGrid = styled.div`
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;
`;

export const Signal = styled.div`
  border: 1px solid rgba(255,255,255,.14);
  border-radius: 18px;
  padding: 16px;
  background: rgba(255,255,255,.06);
  span { display: block; color: #8fc8c2; font-size: .78rem; text-transform: uppercase; letter-spacing: .1em; margin-bottom: 8px; }
  strong { font-size: 1.05rem; }
`;

export const SectionHeader = styled.div`
  display: flex; justify-content: space-between; gap: 24px; align-items: end; margin-bottom: 28px;
  h2 { font-size: clamp(2rem, 4vw, 3.6rem); margin: 0; letter-spacing: -.045em; color: #11191d; }
  p { max-width: 520px; line-height: 1.7; color: #56636a; margin: 0; }
  @media (max-width: 800px) { flex-direction: column; align-items: start; }
`;

export const FeaturedGrid = styled.div`
  display: grid; grid-template-columns: repeat(6, 1fr); gap: 18px;
  > article:first-child { grid-column: span 6; }
  > article { grid-column: span 3; }
  @media (max-width: 860px) { > article, > article:first-child { grid-column: 1 / -1; } }
`;

export const ContainerProject = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px;
  @media (max-width: 1050px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 720px) { grid-template-columns: 1fr; }
`;

export const FilterBar = styled.div`
  display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 24px;
`;

export const FilterButton = styled.button`
  border: 1px solid ${({ $active }) => $active ? '#11191d' : '#cdd3d4'};
  color: ${({ $active }) => $active ? '#fffaf0' : '#243238'};
  background: ${({ $active }) => $active ? '#11191d' : 'rgba(255,255,255,.58)'};
  border-radius: 999px;
  padding: 10px 14px;
  cursor: pointer;
  font-weight: 800;
`;

export const CapabilityGrid = styled.div`
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px;
  @media (max-width: 950px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;

export const CapabilityCard = styled.article`
  border: 1px solid #d8d1c5; border-radius: 22px; padding: 22px; background: rgba(255,250,240,.68);
  h3 { margin: 0 0 10px; color: #11191d; } p { margin: 0; color: #56636a; line-height: 1.65; }
`;

export const CaseStudy = styled.article`
  display: grid; grid-template-columns: .8fr 1.2fr; gap: 22px; padding: 24px; border-radius: 26px; margin-bottom: 18px;
  background: #fffaf0; border: 1px solid #d8d1c5; box-shadow: 0 18px 44px rgba(17,25,29,.07);
  border-left: 8px solid ${({ $accent }) => $accent || '#2d7f82'};
  h3 { margin: 0; font-size: 1.55rem; color: #11191d; } p { color: #4d5a61; line-height: 1.65; }
  @media (max-width: 760px) { grid-template-columns: 1fr; }
`;

export const DetailGrid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
  div { background: #f3efe7; border-radius: 18px; padding: 16px; }
  strong { display: block; margin-bottom: 8px; color: #11191d; }
  @media (max-width: 760px) { grid-template-columns: 1fr; }
`;

export const SkillsGrid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`;

export const SkillCard = styled.article`
  background: #11191d; color: #fffaf0; border-radius: 22px; padding: 22px;
  h3 { margin-top: 0; color: #8fc8c2; }
  ul { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 8px; }
  li { border: 1px solid rgba(255,255,255,.16); border-radius: 999px; padding: 7px 10px; color: #f3efe7; }
`;

export const JourneyList = styled.div`
  display: grid; gap: 14px;
`;

export const JourneyItem = styled.article`
  display: grid; grid-template-columns: 180px 1fr; gap: 18px; padding: 20px; border-bottom: 1px solid #d8d1c5;
  strong { color: #b66b33; } h3 { margin: 0 0 8px; color: #11191d; } p { margin: 0; color: #56636a; line-height: 1.65; }
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`;

export const ContactPanel = styled.section`
  background: #11191d; color: #fffaf0; padding: 64px 16px;
  > div { width: min(1180px, 100%); margin: 0 auto; display: flex; justify-content: space-between; gap: 24px; align-items: center; }
  h2 { font-size: clamp(2rem, 5vw, 4rem); margin: 0; letter-spacing: -.05em; }
  p { color: #d8d1c5; line-height: 1.7; max-width: 560px; }
  @media (max-width: 760px) { > div { flex-direction: column; align-items: start; } }
`;
