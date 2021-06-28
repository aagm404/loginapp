import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
    registerNavigation?: () => void;
}

export default function RegisterAnchor(props: Props) {
    
    return (
        <>
            <TouchableOpacity onPress={props.registerNavigation}>
                <Text style={styles.registerAnchorText}>Não possui uma conta? Cadastre-se</Text>
            </TouchableOpacity>
        </>
    );
}