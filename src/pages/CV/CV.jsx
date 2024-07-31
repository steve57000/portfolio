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
    ButtonPdf,
    CenterButton,
    GlobalStyle,
    SpanInfoMessageDownloadPdf
} from './CVstyles';
import PropTypes from "prop-types";

// Import des icônes
import descriptionIcon from '../../assets/icons/description-de-lemploi.png';
import objectifIcon from '../../assets/icons/realisation.png';
import experienceIcon from '../../assets/icons/experience-professionnelle.png';
import educationIcon from '../../assets/icons/carriere.png';
import skillsIcon from '../../assets/icons/competence.png';
import knowledgeIcon from '../../assets/icons/savoir-faire.png';

import { useInitial } from '../../utils/hooks/useInitial';
import LoadingScreen from "../../components/Loader/Loader";

const CV = ({ layout }) => {
    const { data, isLoading, error } = useDataFetching(curriculumVitae);
    const { loading, error: initialError } = useInitial(); // Utilisation du hook
    const [loadedData, setLoadedData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [loadingMessage, setLoadingMessage] = useState(''); // État pour le message de chargement
    const [successMessage, setSuccessMessage] = useState(''); // État pour le message de succès


    useEffect(() => {
        if (!isLoading && !error && data) {
            setLoadedData(data);
        }
    }, [isLoading, error, data]);

    // Gestion des états de chargement et d'erreur globaux
    if (loading || isLoading || !loadedData) {
        return <LoadingScreen />;
    }

    if (initialError || error) {
        return <div>Une erreur s'est produite : {initialError ? initialError.message : error.message}</div>;
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
        setErrorMessage(''); // Réinitialiser les messages d'erreur
        setLoadingMessage('Génération du PDF en cours...'); // Message de chargement

        try {
            // Génération du PDF
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

            // Création de l'URL Blob et téléchargement du fichier
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'CV-Steve-Bell.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Révoquer l'URL Blob après une courte période pour libérer de la mémoire
            setTimeout(() => URL.revokeObjectURL(url), 100);

            // Réinitialiser le message de chargement et afficher le message de succès
            setLoadingMessage('');
            setSuccessMessage('PDF généré et téléchargé avec succès !');

            // Réinitialiser le message de succès
            setTimeout(() => setSuccessMessage(''), 2000);

        } catch (error) {
            console.error('Erreur lors de la génération ou de l\'ouverture du PDF :', error);
            // Réinitialiser le message de chargement et afficher le message d'erreur
            setLoadingMessage('');
            setErrorMessage('Une erreur s\'est produite lors de la génération ou de l\'ouverture du PDF. Veuillez réessayer.');
        }
    };


    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            setErrorMessage(''); // Réinitialiser les messages d'erreur
            setLoadingMessage('Génération du PDF en cours...'); // Message de chargement

            try {
                await openPdfInNewTab();
                setLoadingMessage(''); // Réinitialiser le message de chargement
                setSuccessMessage('PDF généré et téléchargé avec succès !'); // Message de succès

                // Réinitialiser le message de succès
                setTimeout(() => setSuccessMessage(''), 2000);
            } catch (error) {
                console.error('Erreur lors de l\'ouverture du PDF:', error);
                setLoadingMessage(''); // Réinitialiser le message de chargement
                setErrorMessage('Une erreur s\'est produite lors de la génération ou de l\'ouverture du PDF. Veuillez réessayer.');
            }
        }
    };

    return (
        <>
            <GlobalStyle />
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
                                    <>
                                        {langues.map((langue, index) => (
                                            <ListItem key={index}>
                                                <strong>{langue.langue}</strong>: {langue.niveau}
                                            </ListItem>
                                        ))}
                                    </>
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
                                    <>
                                        {socialLinks.map((link, index) => (
                                            <ListItem key={index}>
                                                {link}
                                            </ListItem>
                                        ))}
                                    </>
                                </List>
                            </Section>
                        )}
                    </ContentContainer>
                    <CenterButton>
                        {
                            title &&
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
                                <ButtonPdf onClick={openPdfInNewTab} onKeyDown={handleKeyDown} >Voir le PDF</ButtonPdf>
                            )}
                    </CenterButton>
                    <>
                        {loadingMessage && <SpanInfoMessageDownloadPdf>{loadingMessage}</SpanInfoMessageDownloadPdf>} {/* Affichage du message de chargement */}
                        {successMessage && <SpanInfoMessageDownloadPdf>{successMessage}</SpanInfoMessageDownloadPdf>} {/* Affichage du message de succès */}
                        {errorMessage && <SpanInfoMessageDownloadPdf>{errorMessage}</SpanInfoMessageDownloadPdf>} {/* Affichage du message d'erreur */}
                    </>
                </BorderContainer>
            </Container>
        </>
    );
};

CV.propTypes = {
    layout: PropTypes.oneOf(['one-column', 'two-columns', 'three-columns']).isRequired,
};

export default CV;

