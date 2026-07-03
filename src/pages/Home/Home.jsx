import React, { useMemo, useState } from 'react';
import CardDetailsContainer from '../../components/CardDetailsContainer/CardDetailsContainer';
import Card from '../../components/Card/Card';
import { profile, projects, featuredProjects, projectCategories, capabilities, skills, journey } from '../../data/portfolioData';
import { GlobalPortfolioStyle, HomeContainer, Hero, Eyebrow, PageTitle, HeroTitle, PageDescription, CtaRow, ButtonLink, HeroPanel, SignalGrid, Signal, Section, SectionHeader, FeaturedGrid, ContainerProject, FilterBar, FilterButton, CapabilityGrid, CapabilityCard, CaseStudy, DetailGrid, SkillsGrid, SkillCard, JourneyList, JourneyItem, ContactPanel } from './HomeStyles';

const getSectionHref = (sectionId) => `${process.env.PUBLIC_URL || ''}/#${sectionId}`;

const Home = () => {
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const selectedProject = projects.find((project) => project.id === selectedCardId);
  const filteredProjects = useMemo(() => activeCategory === 'all' ? projects : projects.filter((project) => project.category === activeCategory), [activeCategory]);
  const caseStudies = featuredProjects;

  const closeDetails = () => {
    const current = selectedCardId;
    setSelectedCardId(null);
    window.setTimeout(() => document.getElementById(`card-${current}`)?.focus(), 0);
  };

  return (
    <HomeContainer>
      <GlobalPortfolioStyle />
      <Hero>
        <div>
          <Eyebrow>{profile.location} · Applications métier · Data</Eyebrow>
          <PageTitle>{profile.name}</PageTitle>
          <HeroTitle>{profile.title}</HeroTitle>
          <PageDescription>{profile.summary} {profile.value}</PageDescription>
          <CtaRow>
            <ButtonLink $variant="dark" href={getSectionHref('projets')}>Voir les projets</ButtonLink>
            <ButtonLink href={getSectionHref('parcours')}>Voir le parcours</ButtonLink>
            <ButtonLink href={profile.links.github} target="_blank" rel="noreferrer">GitHub</ButtonLink>
          </CtaRow>
        </div>
        <HeroPanel aria-label="Signaux forts du profil">
          <div>
            <Eyebrow as="p">Cockpit</Eyebrow>
            <h2>Construire, structurer, analyser.</h2>
            <p>Un portfolio repositionné sur le fullstack Java / Angular, la donnée et les outils concrets.</p>
          </div>
          <SignalGrid>
            {['Fullstack', 'Data / BI', 'SQL', 'Angular', 'Spring Boot', 'RGPD'].map((signal) => <Signal key={signal}><span>focus</span><strong>{signal}</strong></Signal>)}
          </SignalGrid>
        </HeroPanel>
      </Hero>

      <Section id="projets">
        <SectionHeader><div><Eyebrow>Priorité</Eyebrow><h2>Projets vedettes</h2></div><p>Les projets visibles en premier racontent le positionnement actuel : applications métier, architecture fullstack, SQL, qualité de données et décisionnel.</p></SectionHeader>
        <FeaturedGrid>{featuredProjects.map((project) => <Card key={project.id} project={project} onClickMoreInfo={setSelectedCardId} />)}</FeaturedGrid>
      </Section>

      <Section id="atelier">
        <SectionHeader><div><Eyebrow>Atelier</Eyebrow><h2>Ce que je construis</h2></div><p>Des livrables compréhensibles, documentés et reliés à un usage métier.</p></SectionHeader>
        <CapabilityGrid>{capabilities.map((capability) => <CapabilityCard key={capability.title}><h3>{capability.title}</h3><p>{capability.text}</p></CapabilityCard>)}</CapabilityGrid>
      </Section>

      <Section id="case-studies">
        <SectionHeader><div><Eyebrow>Narration</Eyebrow><h2>Case studies</h2></div><p>Un format court pour comprendre le problème, la solution et la valeur de chaque projet principal.</p></SectionHeader>
        {caseStudies.map((project) => (
          <CaseStudy key={project.id} $accent={project.accent}>
            <div><h3>{project.title}</h3><p>{project.summary}</p><ButtonLink href={`#card-${project.id}`} onClick={(event) => { event.preventDefault(); setSelectedCardId(project.id); }}>Lire l’étude</ButtonLink></div>
            <DetailGrid><div><strong>Problème</strong><p>{project.problem}</p></div><div><strong>Solution</strong><p>{project.solution}</p></div><div><strong>Impact</strong><p>{project.impact}</p></div></DetailGrid>
          </CaseStudy>
        ))}
      </Section>

      <Section id="catalogue">
        <SectionHeader><div><Eyebrow>Catalogue</Eyebrow><h2>Tous les projets</h2></div><p>Les archives restent présentes, mais ne dominent plus la lecture du parcours.</p></SectionHeader>
        <FilterBar aria-label="Filtrer les projets par catégorie">
          {projectCategories.map((category) => <FilterButton key={category.id} type="button" $active={activeCategory === category.id} onClick={() => setActiveCategory(category.id)}>{category.label}</FilterButton>)}
        </FilterBar>
        <ContainerProject>{filteredProjects.map((project) => <Card key={project.id} project={project} onClickMoreInfo={setSelectedCardId} />)}</ContainerProject>
      </Section>

      <Section id="competences">
        <SectionHeader><div><Eyebrow>Stack</Eyebrow><h2>Compétences</h2></div><p>Une base web solide, renforcée par Java/Spring, Angular et une montée en puissance data / BI.</p></SectionHeader>
        <SkillsGrid>{skills.map((skill) => <SkillCard key={skill.group}><h3>{skill.group}</h3><ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul></SkillCard>)}</SkillsGrid>
      </Section>

      <Section id="parcours">
        <SectionHeader><div><Eyebrow>Trajectoire</Eyebrow><h2>Parcours</h2></div><p>Un profil atypique qui combine culture terrain, reconversion technique, développement web et analyse de données.</p></SectionHeader>
        <JourneyList>{journey.map((item) => <JourneyItem key={item.period}><strong>{item.period}</strong><div><h3>{item.title}</h3><p>{item.text}</p></div></JourneyItem>)}</JourneyList>
      </Section>

      <ContactPanel id="contact"><div><div><Eyebrow>Contact</Eyebrow><h2>Parlons projet.</h2><p>{profile.email}<br />{profile.location}</p></div><CtaRow><ButtonLink href={`mailto:${profile.email}`}>Email</ButtonLink><ButtonLink href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</ButtonLink><ButtonLink href={profile.links.github} target="_blank" rel="noreferrer">GitHub</ButtonLink></CtaRow></div></ContactPanel>
      {selectedProject && <CardDetailsContainer project={selectedProject} onClose={closeDetails} />}
    </HomeContainer>
  );
};

export default Home;
