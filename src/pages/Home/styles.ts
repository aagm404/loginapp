import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        backgroundColor: '#b5b5b5',
        flex: 1,
        position: 'relative',
    },

    list: {
        width: Dimensions.get('window').width - 20
    },
});