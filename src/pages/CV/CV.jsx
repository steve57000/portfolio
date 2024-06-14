import React, { useEffect, useState } from 'react';
import { pdf } from '@react-pdf/renderer';
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
    SectionTitleIcon,
    ButtonPdf // Import de SectionTitleIcon
} from './CVstyles';
import PropTypes from "prop-types";

// Import des icônes
import descriptionIcon from '../../icons/description-de-lemploi.png';
import objectifIcon from '../../icons/realisation.png';
import experienceIcon from '../../icons/experience-professionnelle.png';
import educationIcon from '../../icons/carriere.png';
import skillsIcon from '../../icons/competence.png';
import knowledgeIcon from '../../icons/savoir-faire.png';

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
        savoir,
        langues,
        socialLinks,
        contactInfo,
        portfolioLink,
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

    const openPdfInNewTab = async () => {
        const blob = await pdf(
            <CVPdf
                title={title}
                description={description}
                experience={experience}
                formations={formations}
                competences={competences}
                savoir={savoir}
                socialLinks={socialLinks}
                contactInfo={contactInfo}
                portfolioLink={portfolioLink}
            />
        ).toBlob();

        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
    };

    return (
        <Container>
            <Title>{title}</Title>
            <BorderContainer>
                <ContentContainer>
                    {description && (
                        <Section>
                            <SectionTitle>
                                <SectionTitleIcon src={descriptionIcon} alt="description" />
                                Description
                            </SectionTitle>
                            <Paragraph>{description}</Paragraph>
                        </Section>
                    )}

                    {objectif && (
                        <Section>
                            <SectionTitle>
                                <SectionTitleIcon src={objectifIcon} alt="objectif" />
                                Objectif
                            </SectionTitle>
                            <Paragraph>{objectif}</Paragraph>
                        </Section>
                    )}
                </ContentContainer>

                {experience && (
                    <Section>
                        <SectionTitle>
                            <SectionTitleIcon src={experienceIcon} alt="expérience" />
                            Expérience professionnelle
                        </SectionTitle>
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
                        <SectionTitle>
                            <SectionTitleIcon src={educationIcon} alt="éducation" />
                            Éducation
                        </SectionTitle>
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
                            <SectionTitle>
                                <SectionTitleIcon src={skillsIcon} alt="compétences" />
                                Compétences
                            </SectionTitle>
                            <List>
                                {competences.map((hardSkill, index) => (
                                    <ListItem key={index}>{hardSkill}</ListItem>
                                ))}
                            </List>
                        </Section>
                    )}

                    {savoir && (
                        <Section>
                            <SectionTitle>
                                <SectionTitleIcon src={knowledgeIcon} alt="savoir" />
                                Savoir
                            </SectionTitle>
                            <List>
                                <>
                                    {savoir.map((softSkill, index) => (
                                        <ListItem key={index}>{softSkill}</ListItem>
                                    ))}
                                </>
                            </List>
                        </Section>
                    )}

                    {langues && (
                        <Section>
                            <SectionTitle>
                                Langues
                            </SectionTitle>
                            <List>
                                {langues.map((langue, index) => (
                                    <ListItem key={index}>
                                        <strong>{langue.langue}</strong>: {langue.niveau}
                                    </ListItem>
                                ))}
                            </List>
                        </Section>
                    )}

                    {/* Affichage des liens vers les réseaux sociaux */}
                    {socialLinks && socialLinks.length > 0 && (
                        <Section>
                            <SectionTitle>
                                Réseaux Sociaux
                            </SectionTitle>
                            <List>
                                {socialLinks.map((link, index) => (
                                    <ListItem key={index}>
                                        {link}
                                    </ListItem>
                                ))}
                            </List>
                        </Section>
                    )}

                    {/* Bouton pour afficher le PDF dans un nouvel onglet */}
                    {title &&
                        description &&
                        objectif &&
                        experience &&
                        formations &&
                        competences &&
                        savoir &&
                        langues &&
                        socialLinks &&
                        contactInfo &&
                        portfolioLink && (
                        <ButtonPdf onClick={openPdfInNewTab}>Voir le PDF</ButtonPdf>
                    )}
                </ContentContainer>
            </BorderContainer>
        </Container>
    );
};

CV.propTypes = {
    layout: PropTypes.oneOf(['one-column', 'two-columns', 'three-columns']).isRequired,
};

export default CV;

