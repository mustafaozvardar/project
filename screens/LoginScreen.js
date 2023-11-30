import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Image } from 'react-native';
import { Alert } from 'react-native';

const logoimg=require('../assets/car.png');

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log('Username:' + username +' ' + 'Passoword:' + password);
      const formData = new URLSearchParams();
      formData.append('username', username);
      formData.append('password', password);
      const response = await fetch('https://rentapisinav.ototur.com/api/v1/gettoken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
      });

      if (response.ok) {
        const token = await response.json();
        console.log(token);
        console.log(response);
        navigation.navigate('Home', { token });
      } 
      else {
        console.error('Login failed', response.status);
        Alert.alert('Login failed', 'Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed', error);
      Alert.alert('Login failed', 'An error occurred');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Login</Text>
      <Image
        style={styles.logo}
        source={logoimg}
      />
     
      
      <Text  style={styles.giris}>Deneme</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <View style={styles.button}>
        <Button title="Login" onPress={() => handleLogin(username, password)} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#f8f8ff',
    
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 2,
    margin: 10,
    padding: 10,
    borderRadius: 12,
  },

  logo: {
    width: 150,
    height: 150,
  },

  giris: {
    fontSize:16,
    fontWeight:'bold',
    color:'black',
    marginRight:250,
  },

  
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 6,
    color:'black',
  },


  button: {
    borderRadius: 20,
    width: 320,
    marginTop: 10,
  },

  
});

export default LoginScreen;
