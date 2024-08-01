import React from 'react';
import {Page, Text, View, Document, Image, Link } from '@react-pdf/renderer';
import PropTypes from "prop-types";
import { styles } from './CVPdfStyles';

import ProfilPhoto from '../../assets/images/profil.png'
import descriptionIcon from '../../assets/icons/description.png';
import experienceIcon from '../../assets/icons/experience.png';
import educationIcon from '../../assets/icons/education.png';
import competencesIcon from '../../assets/icons/competence.png';
import contactIcon from '../../assets/icons/contact.png';
import sociauxIcon from '../../assets/icons/sociaux.png';
import portfolioIcon from '../../assets/icons/portfolio.png';
import savoirIcon from '../../assets/icons/savoir-faire.png';
import adressIcon from '../../assets/icons/adresse.png'
import phoneIcon from '../../assets/icons/telephone.png'
import emailIcon from '../../assets/icons/arobase.png'

// Register the font from the public folder

const CVPdf = ({ title, description, experience, formations, competences, savoir, contactInfo, portfolioLink, socialLinks }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Titre principal */}
            <View style={styles.bannerShadow}>
                <View style={styles.banner}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>

            <View style={styles.containerRow}>
                {/* Colonne gauche */}
                <View style={styles.leftColumnContainer}>
                    <View style={styles.leftColumnShadow}>
                        <View style={styles.leftColumn}>
                            <View style={styles.borderProfilPhoto}> >
                                <Image style={styles.profilPhoto} src={ProfilPhoto} />
                            </View>

                            <View style={styles.containerRow}>
                                <Image style={styles.iconLeft} src={contactIcon} />
                                <Text style={styles.leftColumnTitle}>Contact</Text>
                            </View>

                            <View style={styles.contactInfos}>
                                <Image style={styles.iconSmall} src={adressIcon} />
                                <View>
                                    <Text style={styles.leftColumnTextName}>{contactInfo.name} {contactInfo.lastName}</Text>
                                    <Text style={styles.leftColumnTextContact}>{contactInfo.address}</Text>
                                    <Text style={styles.leftColumnTextContact}>{contactInfo.ville}</Text>
                                </View>
                            </View>
                            <View style={styles.contactInfos}>
                                <Image style={styles.iconSmall} src={phoneIcon} />
                                <Text style={styles.leftColumnTextContact}>{contactInfo.phone}</Text>
                            </View>
                            <View style={styles.contactInfos}>
                                <Image style={styles.iconSmall} src={emailIcon} />
                                <Text style={styles.leftColumnTextContact}>{contactInfo.email}</Text>
                            </View>

                            <View style={styles.containerRow}>
                                <Image style={styles.iconLeft} src={sociauxIcon} />
                                <Text style={styles.leftColumnTitle}>Réseaux Sociaux</Text>
                            </View>
                            <>
                                {socialLinks.map((link, index) => (
                                    <View key={index}>
                                        <Link src={link} style={styles.buttonStyles} target="_blank">
                                            {link}
                                        </Link>
                                    </View>
                                ))}
                            </>

                            <View style={styles.containerRow}>
                                <Image style={styles.iconLeft} src={portfolioIcon} />
                                <Text style={styles.leftColumnTitle}>Portfolio</Text>
                            </View>

                            <View>
                                <Link src={portfolioLink} style={styles.buttonStyles} target="_blank">
                                    {portfolioLink}
                                </Link>
                            </View>

                            <View style={styles.containerRow}>
                                <Image style={styles.iconLeft} src={competencesIcon} />
                                <Text style={styles.leftColumnTitle}>Compétences</Text>
                            </View>
                            <>
                                {competences.map((hardSkill, index) => (
                                    <Text key={index} style={styles.leftColumnText}>-{hardSkill}</Text>
                                ))}
                            </>

                            <View style={styles.containerRow}>
                                <Image style={styles.iconLeft} src={savoirIcon} />
                                <Text style={styles.leftColumnTitle}>Savoir</Text>
                            </View>

                            <>
                                {savoir.map((softSkill, index) => (
                                    <Text key={index} style={styles.leftColumnText}>-{softSkill}</Text>
                                ))}
                            </>
                        </View>
                    </View>

                </View>


                {/* Colonne principale */}
                <View style={styles.container}>
                    <View style={[styles.sectionShadow, styles.sectionShadowDescription]}>
                        {description && (
                            <View style={[styles.section, styles.sectionDescription]}>
                                <View style={styles.sectionTitleContainer}>
                                    <Image style={styles.icon} src={descriptionIcon} />
                                    <Text style={styles.sectionTitle}>Description</Text>
                                </View>
                                <Text style={styles.textDescription}>{description}</Text>
                            </View>
                        )}
                    </View>
                    <View style={[styles.sectionShadow, styles.sectionShadowExperience]}>
                        {experience && (
                            <View style={[styles.section, styles.sectionExperience]}>
                                <View style={styles.sectionTitleContainer}>
                                    <Image style={styles.icon} src={experienceIcon} />
                                    <Text style={styles.sectionTitle}>Expérience professionnelle</Text>
                                </View>
                                <>
                                    {experience.map((exp, index) => (
                                        <View key={index} style={styles.listItem}>
                                            <View style={styles.containerDate}>
                                                <Text style={styles.textDate}>{exp.dateDebut}</Text>
                                                <Text style={styles.textDate}>{exp.dateFin}</Text>
                                            </View>
                                            <View style={styles.maxWidth}>
                                                <Text style={styles.textBold}>{exp.poste} - {exp.entreprise}, {exp.lieu}</Text>
                                                <Text style={styles.text}>{exp.description}</Text>
                                            </View>
                                        </View>
                                    ))}
                                </>
                            </View>
                        )}
                    </View>

                    <View style={[styles.sectionShadow, styles.sectionShadowFormation]}>
                        {formations && (
                            <View style={[styles.section, styles.sectionFormation]}>
                                <View style={styles.sectionTitleContainer}>
                                    <Image style={styles.icon} src={educationIcon} />
                                    <Text style={styles.sectionTitle}>Éducation</Text>
                                </View>
                                <>
                                    {formations.map((edu, index) => (
                                        <View key={index} style={styles.textColumn}>
                                            <Text style={styles.textBold}>{edu.diplome}</Text>
                                            <Text style={styles.text}>{edu.etablissement}, {edu.lieu}</Text>
                                            <Text style={styles.text}>{edu.dateObtention}</Text>
                                        </View>
                                    ))}
                                </>
                            </View>
                        )}
                    </View>

                </View>
            </View>

        </Page>
    </Document>
);

CVPdf.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    experience: PropTypes.arrayOf(PropTypes.shape({
        poste: PropTypes.string.isRequired,
        entreprise: PropTypes.string.isRequired,
        lieu: PropTypes.string.isRequired,
        dateDebut: PropTypes.string.isRequired,
        dateFin: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    })),
    formations: PropTypes.arrayOf(PropTypes.shape({
        diplome: PropTypes.string.isRequired,
        etablissement: PropTypes.string.isRequired,
        lieu: PropTypes.string.isRequired,
        dateObtention: PropTypes.string.isRequired,
    })),
    competences: PropTypes.arrayOf(PropTypes.string),
    savoir: PropTypes.arrayOf(PropTypes.string),
    contactInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        ville: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }),
    portfolioLink: PropTypes.string.isRequired,
    socialLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CVPdf;
