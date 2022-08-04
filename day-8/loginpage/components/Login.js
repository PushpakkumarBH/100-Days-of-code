import { Text, View, Image, StyleSheet, KeyboardAvoidingView} from 'react-native';
import React, { Component } from 'react';
import Myform from './Myform';
export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logocontainer}>
            <Image 
            style={styles.logo}
            source={require('./images/logo.png')}
            />
            <Text style={styles.title}>A simple login App</Text>
        </View>
        <View style={styles.myForm}>
            <Myform />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    logocontainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width:100,
        height:100,
    },
    myForm:{
        flex: 2,
    },
    title:{
        color: '#000',
    },
});