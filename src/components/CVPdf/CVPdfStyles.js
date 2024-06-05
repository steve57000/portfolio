import { StyleSheet } from '@react-pdf/renderer';
import { CVPdfConfig } from './CVPdfConfig';

export const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: CVPdfConfig.pagePadding,
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F2F5',
        color: '#333333',
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: CVPdfConfig.sectionMarginBottom,
        color: '#007BFF',
        fontWeight: CVPdfConfig.fontWeight,
    },
    section: {
        marginBottom: CVPdfConfig.sectionMarginBottom,
    },
    sectionTitle: {
        fontSize: 16,
        marginBottom: CVPdfConfig.sectionMarginBottom,
        color: '#007BFF',
        fontWeight: CVPdfConfig.fontWeight,
    },
    text: {
        fontSize: 10,
        color: '#666666',
    },
    listItem: {
        marginBottom: CVPdfConfig.listItemMarginBottom,
    },
    inlineContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        width: '48%', // Adjust as needed
    },
    columnTitle: {
        fontSize: 14,
        marginBottom: 5,
        color: '#007BFF',
        fontWeight: CVPdfConfig.fontWeight,
    },
});


