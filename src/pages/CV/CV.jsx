import React, { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CVPdf from '../../components/CVPdf/CVPdf';
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
    const [loadedData, setLoadedData] = useState(null);

    useEffect(() => {
        if (!isLoading && !error && data) {
            setLoadedData(data);
        }
    }, [isLoading, error, data]);

    if (isLoading || !loadedData) {
        return <div>Chargement en cours...</div>;
    }

    if (error) {
        return <div>Une erreur s'est produite : {error.message}</div>;
    }

    const {
        title,
        description,
        objectif,
        experience,
        formations,
        competences,
        savoir
    } = loadedData;

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
            <Title>{title}</Title>
            <BorderContainer>
                <ContentContainer>
                    {description && (
                        <Section>
                            <SectionTitle>Description</SectionTitle>
                            <Paragraph>{description}</Paragraph>
                        </Section>
                    )}

                    {objectif && (
                        <Section>
                            <SectionTitle>Objectif</SectionTitle>
                            <Paragraph>{objectif}</Paragraph>
                        </Section>
                    )}
                </ContentContainer>

                {experience && (
                    <Section>
                        <SectionTitle>Expérience professionnelle</SectionTitle>
                        <List>
                            {experience.map((exp, index) => (
                                <ListItem key={index}>
                                    <ExperienceItem>
                                        <Position>{exp.poste}</Position>
                                        <Company>{exp.entreprise}, {exp.lieu}</Company>
                                        <Date>{exp.dateDebut} - {exp.dateFin}</Date>
                                        <Description>{exp.description}</Description>
                                    </ExperienceItem>
                                </ListItem>
                            ))}
                        </List>
                    </Section>
                )}

                {formations && (
                    <Section>
                        <SectionTitle>Éducation</SectionTitle>
                        <List>
                            <>
                                {formations.map((edu, index) => (
                                    <ListItemBorder key={index}>
                                        <Position>{edu.diplome}</Position>
                                        <Company>{edu.etablissement}, {edu.lieu}</Company>
                                        <Date>{edu.dateObtention}</Date>
                                    </ListItemBorder>
                                ))}
                            </>
                        </List>
                    </Section>
                )}

                <ContentContainer>
                    {competences && (
                        <Section>
                            <SectionTitle>Compétences</SectionTitle>
                            <List>
                                {competences.map((hardSkill, index) => (
                                    <ListItem key={index}>{hardSkill}</ListItem>
                                ))}
                            </List>
                        </Section>
                    )}

                    {savoir && (
                        <Section>
                            <SectionTitle>Savoir</SectionTitle>
                            <List>
                                {savoir.map((softSkill, index) => (
                                    <ListItem key={index}>{softSkill}</ListItem>
                                ))}
                            </List>
                        </Section>
                    )}
                </ContentContainer>
            </BorderContainer>

            {title && description && objectif && experience && formations && competences && savoir && (
                <PDFDownloadLink document={<CVPdf
                    title={title}
                    description={description}
                    objectif={objectif}
                    experience={experience}
                    formations={formations}
                    competences={competences}
                    savoir={savoir}
                />} fileName="cv.pdf">
                    {({ loading }) => (loading ? 'Création du PDF...' : 'Télécharger le PDF')}
                </PDFDownloadLink>
            )}

        </Container>
    );
};

CV.propTypes = {
    layout: PropTypes.oneOf(['one-column', 'two-columns', 'three-columns']).isRequired,
};

export default CV;
