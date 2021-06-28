import React from 'react';
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import styles from './styles';

export default function Logo() {
    
    return (
        <>
            <View style={styles.logo}>
                <Entypo
                    color="white"
                    name="login"
                    size={50}
                />
            </View>
        </>
    );
}