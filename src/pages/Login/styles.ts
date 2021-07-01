import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    headerTitle: {
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },

    container: {
        backgroundColor: '#b5b5b5',
        paddingTop: 10,
        flex: 1,
        position: 'relative',
    },
    
    centerizedView: {
        width: '100%',
        top: '15%',
    },

    box: {
        width: '80%',
        backgroundColor: '#5521ff',
        borderRadius: 20,
        alignSelf: 'center',
        paddingHorizontal: 14,
        paddingBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    loginTitleText: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
    },
});