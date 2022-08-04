import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React, { Component } from 'react';

export default class Myform extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <TextInput 
        placeholder="Username"
        style={styles.input}
        />
        <TextInput 
        placeholder="Password"
        style={styles.input}
        />
        {/* <secureTextEntry
        placeholder="password"
        style={styles.input}
        /> */}
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    input:{
        height: 40,
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.8)',
        paddingLeft: 10,
        marginBottom: 15,
    },
    buttonContainer:{
        backgroundColor: '#B1E1FF',
        paddingVertical: 15,
    },
    buttonText:{
        textAlign: 'center',
        fontWeight: 'bold',
    },
  });