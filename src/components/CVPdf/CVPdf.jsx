import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import PropTypes from "prop-types";
import { styles } from './CVPdfStyles';
import { CVPdfConfig } from "./CVPdfConfig";

const CVPdf = ({ title, description, objectif, experience, formations, competences, savoir }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>

                {description && objectif && (
                    <View style={styles.section}>
                        <View style={styles.inlineContainer}>
                            <View style={styles.column}>
                                <Text style={styles.columnTitle}>Description</Text>
                                <Text style={styles.text}>{description}</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.columnTitle}>Objectif</Text>
                                <Text style={styles.text}>{objectif}</Text>
                            </View>
                        </View>
                    </View>
                )}

                {experience && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Expérience professionnelle</Text>
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
                        <Text style={styles.sectionTitle}>Éducation</Text>
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

                {competences && savoir && (
                    <View style={styles.section}>
                        <View style={styles.inlineContainer}>
                            <View style={styles.column}>
                                <Text style={styles.columnTitle}>Compétences</Text>
                                {competences.map((hardSkill, index) => (
                                    <Text key={index} style={styles.text}>{hardSkill}</Text>
                                ))}
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.columnTitle}>Savoir</Text>
                                {savoir.map((softSkill, index) => (
                                    <Text key={index} style={styles.text}>{softSkill}</Text>
                                ))}
                            </View>
                        </View>
                    </View>
                )}
            </View>
        </Page>
    </Document>
);

CVPdf.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    objectif: PropTypes.string,
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
};

export default CVPdf;
