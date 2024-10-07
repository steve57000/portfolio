import { StyleSheet, Font } from '@react-pdf/renderer';

import MyFontTitleBold from '../../assets/fonts/Montserrat-Bold.ttf';
import MyFontTitleSemiBoldItalic from '../../assets/fonts/Montserrat-SemiBoldItalic.ttf';
import MyFontTitleMediumItalic from '../../assets/fonts/Montserrat-MediumItalic.ttf';
import MyFontText from '../../assets/fonts/Merriweather-Regular.ttf';


Font.register({
    family: 'MyTitleFontBold',
    src: MyFontTitleBold,
    format: 'truetype'
});

Font.register({
    family: 'MyTitleFontBoldItalic',
    src: MyFontTitleSemiBoldItalic,
});

Font.register({
    family: 'MyTitleFontMediumItalic',
    src: MyFontTitleMediumItalic,
});

Font.register({
    family: 'MyTextFont',
    src: MyFontText
});
const styles = StyleSheet.create({
    page: {
        width: '100%',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 10,
        fontFamily: 'MyTextFont',
    },
    bannerShadow: {
        position: 'relative',
        width: '100%',
        height: 55,
        backgroundColor: 'rgba(28,28,28,0.3)',
        zIndex: 0,
        borderRadius: 10,
        marginBottom: 10,
    },
    banner: {
        position: 'absolute',
        width: '99.8%',
        height: '98%',
        top: 0,
        left: 0,
        backgroundColor: 'rgb(255,204,0)',
        color: 'white',
        fontSize: 24,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    leftColumnContainer: {
        width: '32%',
        marginRight: 8,
    },
    leftColumn: {
        position: 'absolute',
        top: 0,
        left: 0,
        flexDirection: 'column',
        width: '99.4%',
        height: '99.9%',
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: 'rgb(239,239,239)',
        borderRadius: 10,
        opacity: 1,
    },
    leftColumnShadow: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(28,28,28,0.3)',
        borderRadius: 10,
    },
    borderProfilPhoto: {
        position: 'relative',
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: 'rgb(21,21,21)',
        marginTop: 15,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    profilPhoto: {
        position: 'absolute',
        width: 60,
        height: 90,
        top: -10,
        left: 10,
        opacity: 1,
    },
    leftColumnTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'rgb(255,153,0)',
        textDecoration: 'underline',
        marginBottom: 5,
    },
    leftColumnTextContact: {
        fontSize: 8,
        color: '#2a2a2a',
    },
    leftColumnText: {
        fontSize: 7,
        color: '#2a2a2a',
        marginBottom: 8,
        paddingLeft: 2
    },
    leftColumnTextName: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#000000',
    },
    title: {
        fontSize: 24,
        fontFamily: 'MyTitleFontBold'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    sectionShadow: {
        position: 'relative',
        backgroundColor: 'rgba(28,28,28,0.3)',
        borderRadius: 10,
        width: '100%',
        marginBottom: 20,
    },
    sectionShadowDescription: {
        height: '13%'
    },
    sectionShadowExperience: {
        height: '68%',
        marginBottom: 0
    },
    sectionShadowFormation: {
        height: '35%',
    },
    section: {
        position: 'absolute',
        width: '99.8%',
        backgroundColor: 'rgb(239,239,239)',
        borderRadius: 10,
        paddingTop: 45,
        paddingBottom: 4,
        opacity: 1,
    },
    sectionDescription: {
        height: '99%',
    },
    sectionExperience: {
        height: '99.8%',
    },
    sectionFormation: {
        height: '99.5%',
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
        padding: 8,
    },
    containerRow: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 5
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
        fontSize: 6,
        fontFamily: 'MyTitleFontMediumItalic',
        color: '#000000'
    },
    textWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontSize: 7,
    },
    textColumn: {
        flexDirection: 'column',
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    sectionTitle: {
        fontSize: 16,
        marginBottom: 0,
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'MyTitleFontBold'
    },
    listItem: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    text: {
        fontSize: 8,
        color: '#333',
    },
    textDescription: {
        fontSize: 8,
        color: '#333',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
    },
    textBold: {
        fontFamily: 'MyTitleFontBoldItalic',
        fontSize: 8.5,
        color: '#070707',
        marginBottom: 2
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 15,
    },
    iconSmall: {
        width: 12,
        height: 12,
        marginRight: 5,
        padding: 1
    },
    iconLeft: {
        width: 15,
        height: 15,
        marginRight: 5,
        padding: 1
    },
    columnTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        fontFamily: 'MyTitleFont'
    },
    iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    contactInfos: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 6,
        paddingLeft: 15
    },
    buttonStyles: {
        width: '100%',
        fontSize: 7.2,
        backgroundColor: 'rgb(0,35,102)',
        color: '#fff',
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 5,
        marginBottom: 5,
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
    }
});

export { styles };





