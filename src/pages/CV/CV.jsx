import React from 'react';
import useDataFetching from '../../utils/hooks/useData';
import { curriculumVitae } from "../../data/mockData";
import {
    Container,
    Title,
    BorderContainer,
    ColumnContainer,
    TwoColumnContainer,
    ThreeColumnContainer,
    Section,
    SectionTitle,
    Paragraph,
    List,
    ListItem,
    ExperienceItem,
    Position,
    Company,
    Date,
    Description,
    ListItemBorder,
} from './CVstyles';
import PropTypes from "prop-types";

const CV = ({ layout }) => {
    const { data, isLoading, error } = useDataFetching(curriculumVitae);

    if (isLoading) {
        return <div>Chargement en cours...</div>;
    }

    if (error) {
        return <div>Une erreur s'est produite : {error.message}</div>;
    }

    if (!data) {
        return <div>Les données du CV ne sont pas disponibles.</div>;
    }

    let ContentContainer;

    switch (layout) {
        case 'one-column':
            ContentContainer = ColumnContainer;
            break;
        case 'two-columns':
            ContentContainer = TwoColumnContainer;
            break;
        case 'three-columns':
            ContentContainer = ThreeColumnContainer;
            break;
        default:
            ContentContainer = ColumnContainer;
            break;
    }

    return (
        <Container>
            <Title>{data.title}</Title>
            <BorderContainer>
                <ContentContainer>
                    {/* Descripton */}
                    <Section>
                        <SectionTitle>Déscription</SectionTitle>
                        <Paragraph>{data.description}</Paragraph>
                    </Section>

                    {/* Objectif */}
                    <Section>
                        <SectionTitle>Objectif</SectionTitle>
                        <Paragraph>{data.objectif}</Paragraph>
                    </Section>
                </ContentContainer>

                {/* Expérience professionnelle */}
                <Section>
                    <SectionTitle>Expérience professionnelle</SectionTitle>
                    <List>
                        <>
                            {data.experience && data.experience.map((exp, index) => (
                                <ListItem key={index}>
                                    <ExperienceItem>
                                        <Position>{exp.poste}</Position>
                                        <Company>{exp.entreprise}, {exp.lieu}</Company>
                                        <Date>{exp.dateDebut} - {exp.dateFin}</Date>
                                        <Description>{exp.description}</Description>
                                    </ExperienceItem>
                                </ListItem>
                            ))}
                        </>
                    </List>
                </Section>

                {/* Éducation */}
                <Section>
                    <SectionTitle>Éducation</SectionTitle>
                    <List>
                        <>
                            {data.formations && data.formations.map((edu, index) => (
                                <ListItemBorder key={index}>
                                    <Position>{edu.diplome}</Position>
                                    <Company>{edu.etablissement}, {edu.lieu}</Company>
                                    <Date>{edu.dateObtention}</Date>
                                </ListItemBorder>
                            ))}
                        </>
                    </List>
                </Section>

                <ContentContainer>
                    {/* Compétences */}
                    <Section>
                        <SectionTitle>Compétences</SectionTitle>
                        <List>
                            <>
                                {data.competences && data.competences.map((hardSkill, index) => (
                                    <ListItem key={index}>{hardSkill}</ListItem>
                                ))}
                            </>
                        </List>
                    </Section>

                    {/* Savoir */}
                    <Section>
                        <SectionTitle>Savoir</SectionTitle>
                        <List>
                            <>
                                {data.savoir && data.savoir.map((softSkill, index) => (
                                    <ListItem key={index}>{softSkill}</ListItem>
                                ))}
                            </>
                        </List>
                    </Section>
                </ContentContainer>
            </BorderContainer>
        </Container>
    );
};

CV.propTypes = {
    layout: PropTypes.string.isRequired,
};
export default CV;




