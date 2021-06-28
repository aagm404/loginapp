import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { UserLogin } from '../../models/userLogin';

import styles from './styles';

interface Props {
    userLogin: UserLogin
    onPressLoginButton: (userLogin: UserLogin) => void;
    label: string;
}

export default function LoginButton(props: Props) {
    
    return (
        <>
            <TouchableOpacity>
                <BorderlessButton style={styles.button} onPress={() => props.onPressLoginButton(props.userLogin)} >
                    <Text style={styles.text}>{props.label}</Text>
                </BorderlessButton>
            </TouchableOpacity>
        </>
    );
}