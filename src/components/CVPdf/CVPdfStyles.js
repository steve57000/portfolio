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
        marginLeft: 30,
        marginRight: 30,
    },
    leftColumn: {
        flexDirection: 'column',
        width: 170,
        paddingTop: 30,
        paddingRight: 15,
        borderRightWidth: 2,
        borderRightColor: '#ccc',
    },
    leftColumnTitle: {
        fontSize: 14,
        marginTop: 10,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    leftColumnText: {
        fontSize: 9, // Réduire la taille de la police pour la colonne de gauche
        color: '#333',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    section: {
        marginBottom: 10,
    },
    sectionTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,153,0,0.71)',
        borderRadius: 5,
        padding: 5,
        marginVertical: 5,
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
    },
    text: {
        fontSize: 9,
        color: '#333',
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 15,
    },
    columnTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    link: {
        fontSize: 9,
        color: 'blue',
        textDecoration: 'underline',
        marginBottom: 5,
    },
    button: {
        display: 'inline-block',
        padding: '5px 10px',
        fontSize: 10,
        backgroundColor: '#007bff',
        color: '#fff',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: 5,
        marginBottom: 5,
    }
});

export { styles };




