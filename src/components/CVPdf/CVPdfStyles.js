import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
    },
    leftColumn: {
        flexDirection: 'column',
        width: 180,
        paddingTop: 30,
        paddingRight: 10,
        borderRightWidth: 2,
        borderRightColor: '#ccc',
    },
    leftColumnTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'rgb(255,153,0)',
        textDecoration: 'underline',
    },
    leftColumnText: {
        fontSize: 9,
        color: '#333',
        marginBottom: 8,
    },
    leftColumnTextName: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000000',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    section: {
        marginBottom: 15,
    },
    sectionTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,153,0,0.71)',
        borderRadius: 5,
        padding: 5,
        marginBottom: 10,
    },
    maxWidth: {
        width: '300px'
    },
    containerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 10,
    },
    containerDate: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 10,
    },
    textDate: {
        fontSize: 8,
        fontWeight: 'bold',
        color: '#000000'
    },
    textWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontSize: 8,
    },
    textColumn: {
        flexDirection: 'column',
        marginBottom: 5,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 0,
        color: '#ffffff',
        textAlign: 'center',
    },
    listItem: {
        marginBottom: 10,
        flexDirection: 'row',
    },
    text: {
        fontSize: 9,
        color: '#333',
    },
    textBold: {
        fontWeight: 'bold',
        fontSize: 10,
        color: '#070707',
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 15,
    },
    iconSmall: {
        width: 10,
        height: 10,
        marginRight: 5,
        marginLeft: 20,
    },
    iconLeft: {
        width: 15,
        height: 15,
        marginRight: 5,
    },
    columnTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    contactInfos: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    buttonStyles: {
        fontSize: 9,
        backgroundColor: '#158afd',
        color: '#fff',
        padding: 5,
        borderRadius: 5,
        marginBottom: 5,
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
    }
});

export { styles };




