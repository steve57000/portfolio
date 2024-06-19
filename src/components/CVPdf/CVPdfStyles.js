import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    banner: {
        width: '100%',
        backgroundColor: '#007BFF',
        color: 'white',
        padding: 10,
        fontSize: 24,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    leftColumnContainer: {
        position: 'relative',
        width: '33%',
        marginRight: 10,
    },
    leftColumn: {
        flexDirection: 'column',
        width: '99%',
        height: '97.3%',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'rgb(253,253,253)',
        borderRadius: 10,
        zIndex: 1,
    },
    leftColumnShadow: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '97.4%',
        backgroundColor: 'rgba(186,185,185,0.2)',
        opacity: 0.2,
        zIndex: 0,
        borderRadius: 10,
    },
    leftColumnTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'rgb(255,153,0)',
        textDecoration: 'underline',
    },
    leftColumnTextContact: {
        fontSize: 9,
        color: '#333',
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
    },
    section: {
        position: 'relative',
        marginBottom: 20,
        backgroundColor: 'rgb(253,253,253)',
        borderRadius: 10,
        paddingTop: 40,
        width: '100%',
        zIndex: 1,
    },
    sectionShadow: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: -1,
        bottom: -1,
        backgroundColor: 'rgba(186,185,185,0.2)',
        opacity: 0.2,
        zIndex: 0,
        borderRadius: 10,
    },
    sectionTitleContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,153,0,0.71)',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 5,
    },
    containerRow: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    maxWidth: {
       width: '100%',
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
        paddingLeft: 10,
        paddingRight: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 0,
        color: '#ffffff',
        textAlign: 'center',
    },
    listItem: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    text: {
        fontSize: 9,
        color: '#333',
    },
    textDescription: {
        fontSize: 9,
        color: '#333',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
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
        marginLeft: 10,
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
        marginTop: 5
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





