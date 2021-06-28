import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { User } from '../../models/user';

import styles from './styles';

interface Props {
    user: User
    onPressRegisterButton: (user: User) => void;
    label: string;
}

export default function RegisterButton(props: Props) {
    
    return (
        <>
            <TouchableOpacity>
                <BorderlessButton style={styles.button} onPress={() => props.onPressRegisterButton(props.user)} >
                    <Text style={styles.text}>{props.label}</Text>
                </BorderlessButton>
            </TouchableOpacity>
        </>
    );
}