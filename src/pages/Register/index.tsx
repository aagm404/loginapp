import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import RegisterButton from '../../components/RegisterButton';
import InputTextField from '../../components/InputTextField';
import { User } from '../../models/user';
import { submitRegister } from '../../services/apiCalls';

import styles from './styles';

export default function ResgisterPage() {

    const navigation = useNavigation();

    const [ address, setAddress ] = React.useState<string>();
    const [ age, setAge ] = React.useState<string>();
    const [ email, setEmail ] = React.useState<string>();
    const [ name, setName ] = React.useState<string>();
    const [ password, setPassword ] = React.useState<string>();
    // const [ token, setToken ] = React.useState<string>();
    const user = {address, age, email, name, password} as User

    async function submitRegisterAction(user: User) {
        await submitRegister(user)
        .then(response => {
            console.log(`Response Status: ${response.status}`);
            console.log(`Response Message: ${response.data}`);
            navigation.navigate("Login");
        }).catch(error => {
            console.log(`Error Status: ${error.response.status}`);
            console.log(`Error Message: ${error.response.data}`);
            
            if (error.response.status === 400) {
                if (error.response.data === "Customer must be an adult!") {
                    alert("A idade deve ser maior ou igual à 18 anos!");
                } else if (error.response.data === "Customer email is already registered.") {
                    alert("Este e-mail já está em uso");
                }
            } else {
                alert("Não foi possível fazer o cadastro!\nTente novamente");
            }
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.centerizedView}>
                <View style={styles.box}>
                    <InputTextField label="Nome" autoCapitalize="words" keyboardType="default" textContentType="name" value={name} onChange={setName} />
                    <InputTextField label="Idade" keyboardType="numeric" value={age} onChange={setAge} />
                    <InputTextField label="Endereço" autoCapitalize="words" keyboardType="email-address" textContentType="fullStreetAddress" value={address} onChange={setAddress} />
                    <InputTextField label="Email" autoCapitalize="none" keyboardType='email-address' textContentType="emailAddress" value={email} onChange={setEmail} />
                    <InputTextField label="Senha" autoCapitalize="none" keyboardType="default" textContentType="password" secureTextEntry={true} value={password} onChange={setPassword} />
                    
                    <RegisterButton label="Cadastrar" user={user} onPressRegisterButton={() => submitRegisterAction(user)} /> 
                </View>
            </View>
        </View>
    );
}