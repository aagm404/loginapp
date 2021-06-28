import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

interface Props {
    onPressButton?: (text: string) => void;
    label: string;
}

export default function ActionButton(props: Props) {
    
    return (
        <>
            <TouchableOpacity>
                <BorderlessButton style={styles.button}>
                    <Text style={styles.text}>{props.label}</Text>
                </BorderlessButton>
            </TouchableOpacity>
        </>
    );
}