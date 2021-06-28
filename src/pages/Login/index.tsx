import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import ActionButton from '../../components/ActionButton';
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
        console.log(userLogin)
        const loginResponse = {status: 0, data: ""};
        await submitLogin(userLogin)
        .then(response => {
            console.log(response);
            loginResponse.status = response.status;
            loginResponse.data = response.data
            alert(`Status: ${loginResponse.status}`)
        }).catch(error => {
            console.log(error.response);
            loginResponse.status = error.response.status;
            loginResponse.data = error.response.data
            alert(`Status: ${loginResponse.status}`)
        });
        console.log(loginResponse);
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
                    
                    <ActionButton label="Login" userLogin={userLogin} onPressActionButton={() => submitLoginAction(userLogin)} />
                    <RegisterAnchor registerNavigation={goRegister}/>
                </View>
            </View>
        </View>
    );
}