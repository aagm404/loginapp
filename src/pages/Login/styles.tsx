import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
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

    authBox: {
        width: '80%',
        backgroundColor: '#5482ff',
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

    logoBox: {
        width: 100,
        height: 100,
        backgroundColor: '#002078',
        borderRadius: 1000,
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: -50,
        marginBottom: -50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },

    loginTitleText: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
    },

    inputBox: {
        marginTop: 10,
    },

    inputLabel: {
        fontSize: 18,
        marginBottom: 6,
    },

    input: {
        width: '100%',
        height: 40,
        backgroundColor: '#dfe4ea',
        borderRadius: 4,
        paddingHorizontal: 10,
    },

    loginButton: {
        backgroundColor: '#002078',
        marginTop: 10,
        paddingVertical: 10,
        borderRadius: 4,
    },

    loginButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },

    registerText: {
        color: 'black',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 12,
    },
  });