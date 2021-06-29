import React from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import styles from './styles';

export default function HomePage() {

    const route = useRoute();
    const productList = route.params;
    console.log("HomePage:")
    console.log(productList);

    return (
        <View style={styles.container}>
            <Text>Hello World!</Text>
        </View>
    );
}