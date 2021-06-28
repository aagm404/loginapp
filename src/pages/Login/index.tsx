import React from 'react';
import { Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Entypo } from '@expo/vector-icons';
// import { Icon } from 'react-native-elements';

import styles from './styles';

export default function LoginPage() {
  return (
      <View style={styles.container}>
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <View style={styles.logoBox}>
              <Entypo
                color="white"
                name="login"
                size={50}
              />
            </View>
            <Text style={styles.loginTitleText}>LoginApp</Text>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                textContentType='password'
              />
            </View>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.registerText}>
                Não possui uma conta? Cadastre-se
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}