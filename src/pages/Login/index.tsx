import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import LoginButton from '../../components/LoginButton';
import InputTextField from '../../components/InputTextField';
import Logo from '../../components/Logo';
import RegisterAnchor from '../../components/RegisterAnchor';
import { UserLogin } from '../../models/userLogin';
import { submitLogin } from "../../services/apiCalls";

import styles from './styles';

export default function LoginPage() {

    const navigation = useNavigation();

    const [ login, setLogin ] = React.useState<string>();
    const [ password, setPassword ] = React.useState<string>();
    const userLogin = {login, password} as UserLogin;
    
    async function submitLoginAction(userLogin: UserLogin) {

        const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

        if (!emailPattern.test(String(userLogin.login))) {
            alert('Email inválido');
            return;

        } else if (userLogin.login === undefined || userLogin.login.trim() === '') {
            alert('O email é obrigatório');
            return;

        } else if (userLogin.password === undefined || userLogin.password.trim() === '') {
            alert('A senha é obrigatória');
            return;
        }

        await submitLogin(userLogin)
        .then(response => {
            navigation.navigate("Home", response.data);
        }).catch(error => {
            alert("Email e/ou senha inválidos!\nTente novamente");
        });
    }

    function goRegister() {
        navigation.navigate("Cadastro");
    }

    return (
        <View style={styles.container}>
            <View style={styles.centerizedView}>
                <View style={styles.box}>
                    <Logo />
                    <Text style={styles.loginTitleText}>LoginApp</Text>
                    <InputTextField label="Email" autoCapitalize="none" keyboardType="email-address" textContentType="emailAddress" value={login} onChange={setLogin} />
                    <InputTextField label="Senha" autoCapitalize="none" keyboardType="default" textContentType="password" secureTextEntry={true} value={password} onChange={setPassword} />
                    
                    <LoginButton label="Login" userLogin={userLogin} onPressLoginButton={() => submitLoginAction(userLogin)} />
                    <RegisterAnchor registerNavigation={goRegister}/>
                </View>
            </View>
        </View>
    );
}