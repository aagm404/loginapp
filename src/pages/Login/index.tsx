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
        const loginResponse = {status: 0, data: ""};
        await submitLogin(userLogin)
        .then(response => {
            console.log(`Response Status: ${response.status}`);
            console.log(`Response Message: ${response.data}`);
            loginResponse.status = response.status;
            loginResponse.data = response.data
            alert(`Status: ${loginResponse.status}`)
        }).catch(error => {
            console.log(`Error Status: ${error.response.status}`);
            console.log(`Error Message: ${error.response.data}`);
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