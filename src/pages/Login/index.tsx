import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import ActionButton from '../../components/ActionButton';
import InputTextField from '../../components/InputTextField';
import Logo from '../../components/Logo';
import RegisterAnchor from '../../components/RegisterAnchor';

import styles from './styles';

export default function LoginPage() {

    const navigation = useNavigation();

    function goRegister() {
        navigation.navigate("Cadastro");
    }

    return (
        <View style={styles.container}>
            <View style={styles.centerizedView}>
                <View style={styles.box}>
                    <Logo />
                    <Text style={styles.loginTitleText}>LoginApp</Text>
                    <InputTextField label="Email" autoCapitalize="none" keyboardType="email-address" textContentType="emailAddress" />
                    <InputTextField label="Senha" autoCapitalize="none" keyboardType="default" textContentType="password" secureTextEntry={true} />
                    
                    <ActionButton label="Login" />
                    <RegisterAnchor registerNavigation={goRegister}/>
                </View>
            </View>
        </View>
    );
}