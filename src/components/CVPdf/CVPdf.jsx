import React from 'react';
import { Page, Text, View, Document, Image, Link } from '@react-pdf/renderer';
import PropTypes from "prop-types";
import { styles } from './CVPdfStyles';

import descriptionIcon from '../../icons/description.png';
import experienceIcon from '../../icons/experience.png';
import educationIcon from '../../icons/education.png';

const CVPdf = ({ title, description, experience, formations, competences, savoir, contactInfo, portfolioLink, socialLinks }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Colonne gauche */}
            <View style={styles.leftColumn}>
                <Text style={styles.leftColumnTitle}>{contactInfo.name} {contactInfo.lastName}</Text>
                <Text style={styles.leftColumnText}>{contactInfo.address}</Text>
                <Text style={styles.leftColumnText}>{contactInfo.ville}</Text>
                <Text style={styles.leftColumnText}>{contactInfo.phone}</Text>
                <Text style={styles.leftColumnText}>{contactInfo.email}</Text>

                <Text style={styles.leftColumnTitle}>Réseaux Sociaux</Text>
                <>
                    {socialLinks.map((link, index) => (
                        <Link key={index} src={link} style={styles.button}>{link}</Link>
                    ))}
                </>

                <Text style={styles.leftColumnTitle}>Portfolio</Text>
                <Link src={portfolioLink} style={styles.button}>{portfolioLink}</Link>

                <Text style={styles.leftColumnTitle}>Compétences</Text>
                <>
                    {competences.map((hardSkill, index) => (
                        <Text key={index} style={styles.leftColumnText}>{hardSkill}</Text>
                    ))}
                </>

                <Text style={styles.leftColumnTitle}>Savoir</Text>
                <>
                    {savoir.map((softSkill, index) => (
                        <Text key={index} style={styles.leftColumnText}>{softSkill}</Text>
                    ))}
                </>
            </View>

            {/* Colonne principale */}
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>

                {description && (
                    <View style={styles.section}>
                        <View style={styles.sectionTitleContainer}>
                            <Image style={styles.icon} src={descriptionIcon} />
                            <Text style={styles.sectionTitle}>Description</Text>
                        </View>
                        <Text style={styles.text}>{description}</Text>
                    </View>
                )}

                {experience && (
                    <View style={styles.section}>
                        <View style={styles.sectionTitleContainer}>
                            <Image style={styles.icon} src={experienceIcon} />
                            <Text style={styles.sectionTitle}>Expérience professionnelle</Text>
                        </View>
                        <>
                            {experience.map((exp, index) => (
                                <View key={index} style={styles.listItem}>
                                    <Text style={styles.text}>
                                        <Text style={{ fontWeight: 'bold' }}>{exp.poste}</Text> - {exp.entreprise}, {exp.lieu}
                                    </Text>
                                    <Text style={styles.text}>{exp.dateDebut} - {exp.dateFin}</Text>
                                    <Text style={styles.text}>{exp.description}</Text>
                                </View>
                            ))}
                        </>
                    </View>
                )}

                {formations && (
                    <View style={styles.section}>
                        <View style={styles.sectionTitleContainer}>
                            <Image style={styles.icon} src={educationIcon} />
                            <Text style={styles.sectionTitle}>Éducation</Text>
                        </View>
                        <>
                            {formations.map((edu, index) => (
                                <View key={index} style={styles.listItem}>
                                    <Text style={styles.text}>
                                        <Text style={{ fontWeight: 'bold' }}>{edu.diplome}</Text> - {edu.etablissement}, {edu.lieu}
                                    </Text>
                                    <Text style={styles.text}>{edu.dateObtention}</Text>
                                </View>
                            ))}
                        </>
                    </View>
                )}
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