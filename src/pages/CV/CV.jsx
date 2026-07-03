import React from 'react';
import { profile, skills, journey, projects } from '../../data/portfolioData';
import { HomeContainer, GlobalPortfolioStyle, Section, SectionHeader, Eyebrow, PageTitle, HeroTitle, PageDescription, SkillsGrid, SkillCard, JourneyList, JourneyItem, ButtonLink, CtaRow } from '../Home/HomeStyles';

const CV = () => {
  const keyProjects = projects.filter((project) => project.featured).slice(0, 5);
  return (
    <HomeContainer as="main">
      <GlobalPortfolioStyle />
      <Section>
        <Eyebrow>CV synthétique</Eyebrow>
        <PageTitle>{profile.name}</PageTitle>
        <HeroTitle>{profile.title}</HeroTitle>
        <PageDescription>{profile.summary}</PageDescription>
        <CtaRow>
          <ButtonLink href={`mailto:${profile.email}`}>Email</ButtonLink>
          <ButtonLink href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</ButtonLink>
          <ButtonLink href={profile.links.github} target="_blank" rel="noreferrer">GitHub</ButtonLink>
        </CtaRow>
      </Section>
      <Section>
        <SectionHeader><div><Eyebrow>Compétences</Eyebrow><h2>Stack & méthodes</h2></div><p>Compétences structurées autour du fullstack, de la donnée et de la qualité.</p></SectionHeader>
        <SkillsGrid>{skills.map((skill) => <SkillCard key={skill.group}><h3>{skill.group}</h3><ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul></SkillCard>)}</SkillsGrid>
      </Section>
      <Section>
        <SectionHeader><div><Eyebrow>Parcours</Eyebrow><h2>Trajectoire</h2></div><p>Une reconversion technique construite progressivement, du web vers le fullstack et la BI.</p></SectionHeader>
        <JourneyList>{journey.map((item) => <JourneyItem key={item.period}><strong>{item.period}</strong><div><h3>{item.title}</h3><p>{item.text}</p></div></JourneyItem>)}</JourneyList>
      </Section>
      <Section>
        <SectionHeader><div><Eyebrow>Réalisations</Eyebrow><h2>Projets représentatifs</h2></div><p>Exemples de livrables valorisant le profil actuel.</p></SectionHeader>
        <JourneyList>{keyProjects.map((project) => <JourneyItem key={project.id}><strong>{project.shortTitle}</strong><div><h3>{project.title}</h3><p>{project.summary}</p></div></JourneyItem>)}</JourneyList>
      </Section>
    </HomeContainer>
  );
};

export default CV;
