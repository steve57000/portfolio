import React from 'react';
import useDataFetching from '../../hooks/useData';
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
    Description
} from './CVstyles';
import { cvStyles } from './CVconfig';

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
        <Container color={cvStyles.containerColor}>
            <Title color={cvStyles.titleColor} fontSize={cvStyles.titleFontSize}>{data.title}</Title>
            <BorderContainer>
                <ContentContainer>
                    {/* Objectif */}
                    <Section>
                        <SectionTitle color={cvStyles.sectionTitleColor} fontSize={cvStyles.sectionTitleFontSize}>Objectif</SectionTitle>
                        <Paragraph color={cvStyles.paragraphColor} fontSize={cvStyles.paragraphFontSize}>{data.objectif}</Paragraph>
                    </Section>

                    {/* Expérience professionnelle */}
                    <Section>
                        <SectionTitle color={cvStyles.sectionTitleColor} fontSize={cvStyles.sectionTitleFontSize}>Expérience professionnelle</SectionTitle>
                        <List>
                            <>
                                {data.experience && data.experience.map((exp, index) => (
                                    <ListItem key={index}>
                                        <ExperienceItem>
                                            <Position color={cvStyles.positionColor} fontSize={cvStyles.positionFontSize}>{exp.poste}</Position>
                                            <Company color={cvStyles.companyColor} fontSize={cvStyles.companyFontSize}>{exp.entreprise}, {exp.lieu}</Company>
                                            <Date color={cvStyles.dateColor} fontSize={cvStyles.dateFontSize}>{exp.dateDebut} - {exp.dateFin}</Date>
                                            <Description color={cvStyles.descriptionColor} fontSize={cvStyles.descriptionFontSize}>{exp.description}</Description>
                                        </ExperienceItem>
                                    </ListItem>
                                ))}
                            </>
                        </List>
                    </Section>

                    {/* Éducation */}
                    <Section>
                        <SectionTitle color={cvStyles.sectionTitleColor} fontSize={cvStyles.sectionTitleFontSize}>Éducation</SectionTitle>
                        <List>
                            <>
                                {data.formations && data.formations.map((edu, index) => (
                                    <ListItem key={index}>
                                        <Position color={cvStyles.positionColor} fontSize={cvStyles.positionFontSize}>{edu.diplome}</Position>
                                        <Company color={cvStyles.companyColor} fontSize={cvStyles.companyFontSize}>{edu.etablissement}, {edu.lieu}</Company>
                                        <Date color={cvStyles.dateColor} fontSize={cvStyles.dateFontSize}>{edu.dateObtention}</Date>
                                    </ListItem>
                                ))}
                            </>
                        </List>
                    </Section>

                    {/* Compétences */}
                    <Section>
                        <SectionTitle color={cvStyles.sectionTitleColor} fontSize={cvStyles.sectionTitleFontSize}>Compétences</SectionTitle>
                        <List>
                            <>
                                {data.competences && data.competences.map((skill, index) => (
                                    <ListItem key={index}>{skill}</ListItem>
                                ))}
                            </>
                        </List>
                    </Section>
                </ContentContainer>
            </BorderContainer>
        </Container>
    );
};

export default CV;




