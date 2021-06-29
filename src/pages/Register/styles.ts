import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    container: {
        backgroundColor: '#b5b5b5',
        flex: 1,
        position: 'relative',
    },

    centerizedView: {
        width: '100%',
        top: '3%',
    },

    box: {
        width: '90%',
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
});