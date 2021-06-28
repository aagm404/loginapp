import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { UserLogin } from '../../models/userLogin';

import styles from './styles';

interface Props {
    userLogin: UserLogin
    onPressActionButton: (userLogin: UserLogin) => void;
    label: string;
}

export default function ActionButton(props: Props) {
    
    return (
        <>
            <TouchableOpacity>
                <BorderlessButton style={styles.button} onPress={() => props.onPressActionButton(props.userLogin)} >
                    <Text style={styles.text}>{props.label}</Text>
                </BorderlessButton>
            </TouchableOpacity>
        </>
    );
}