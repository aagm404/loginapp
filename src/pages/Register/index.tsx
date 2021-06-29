import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
    const user = {address, age, email, name, password} as User

    async function submitRegisterAction(user: User) {

        const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        
        if (user.name === undefined || user.name.trim() === '') {
            alert('O nome é obrigatório');
            return;

        } else if (user.age === undefined || user.age.trim() === '') {
            alert('A idade é obrigatória');
            return;

        } else if (user.address === undefined || user.address.trim() === '') {
            alert('O endereço é obrigatório');
            return;

        } else if (user.email === undefined || user.email.trim() === '') {
            alert('O email é obrigatório');
            return;

        } else if (!emailPattern.test(String(user.email))) {
            alert('Email inválido');
            return;

        } else if (user.password === undefined || user.password.trim() === '') {
            alert('A senha é obrigatória');
            return;
        }

        await submitRegister(user)
        .then(response => {
            navigation.reset({
                index: 0,
                routes: [{ name: "Login"}]
            });
        }).catch(error => {
            
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