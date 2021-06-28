import React from 'react';
import { KeyboardTypeOptions, Text, TextInput, View } from 'react-native';

import styles from './styles';

interface Props {
    onChange: (text: string) => void;
    label: string;
    value: string  | undefined;
    autoCapitalize?: 'none' | 'words';
    keyboardType?: KeyboardTypeOptions;
    textContentType?: 'fullStreetAddress' | 'emailAddress' | 'name' | 'password';
    secureTextEntry?: boolean | undefined;
}

export default function InputTextField(props: Props) {

    return (
        <>
            <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>{props.label}</Text>
                <TextInput 
                    style={styles.inputText} 
                    value={props.value}
                    autoCapitalize={props.autoCapitalize}
                    keyboardType={props.keyboardType}
                    secureTextEntry={props.secureTextEntry}
                    onChangeText={props.onChange}
                />
            </View>
        </>
    );
}