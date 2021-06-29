import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import LoginButton from '../../components/LoginButton';
import InputTextField from '../../components/InputTextField';
import Logo from '../../components/Logo';
import RegisterAnchor from '../../components/RegisterAnchor';
import { UserLogin } from '../../models/userLogin';
import { getProductList, submitLogin } from "../../services/apiCalls";

import styles from './styles';

export default function LoginPage() {

    const navigation = useNavigation();

    const [ login, setLogin ] = React.useState<string>();
    const [ password, setPassword ] = React.useState<string>();
    const userLogin = {login, password} as UserLogin;
    
    async function submitLoginAction(userLogin: UserLogin) {
        await submitLogin(userLogin)
        .then(response => {
            console.log(`Login response status: ${response.status}`);
            console.log(`Login response data: ${response.data}`);
            navigation.navigate("Home", response.data);
            // goToUserHome(response.data);
        }).catch(error => {
            console.log(`Login error status: ${error.response.status}`);
            console.log(`Login error message: ${error.response.data}`);
            alert("Email e/ou senha inválidos!\nTente novamente");
        });
    }

    // async function goToUserHome(token: string) {
    //     await getProductList(token)
    //     .then(response => {
    //         console.log(`ProductList response status: ${response.status}`);
    //         console.log(`ProductList response data: ${response.data}`);
    //         const productList = response.data;
    //         navigation.navigate("Home", productList);
    //     }).catch(error => {
    //         console.log(`ProductList error status: ${error.response.status}`);
    //         console.log(`ProductList error message: ${error.response.data}`);
    //     });
    // }

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