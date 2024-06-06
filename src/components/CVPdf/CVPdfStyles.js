import { StyleSheet } from '@react-pdf/renderer';
import { CVPdfConfig } from './CVPdfConfig';

export const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
    },
    container: {
        width: '100%',
        height: '100%',
        padding: CVPdfConfig.pagePadding,
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
        fontSize: 14,
        marginBottom: 0,
        color: '#007BFF',
        fontWeight: CVPdfConfig.fontWeight,
    },
    text: {
        fontSize: 9,
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
        marginBottom: 0,
        color: '#007BFF',
        fontWeight: CVPdfConfig.fontWeight,
    },
    iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        width: 20, // Adjusted size
        height: 20, // Adjusted size
        marginRight: 10,
        alignSelf: 'center', // Align icon vertically with text
    },
});



