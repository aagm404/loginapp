import React from 'react';
import { View } from 'react-native';

import ActionButton from '../../components/ActionButton';
import InputTextField from '../../components/InputTextField';

import styles from './styles';

export default function ResgisterPage() {

    return (
        <View style={styles.container}>
            <View style={styles.centerizedView}>
                <View style={styles.box}>
                    {/* <InputTextField label="Endereço" autoCapitalize="words" keyboardType="email-address" textContentType="fullStreetAddress" />
                    <InputTextField label="Idade" keyboardType="numeric" />
                    <InputTextField label="Email" autoCapitalize="none" keyboardType='email-address' textContentType="emailAddress" />
                    <InputTextField label="Nome" autoCapitalize="words" keyboardType="default" textContentType="name"/>
                    <InputTextField label="Senha" autoCapitalize="none" keyboardType="default" textContentType="password" secureTextEntry={true} />
                    
                    <ActionButton label="Cadastrar" /> */}
                </View>
            </View>
        </View>
    );
}