import React, { useState } from "react";
import {
  View, Button, StyleSheet, Text, TextInput, Pressable
} from "react-native";
import registerService from "../../services/register.service";

export default function SignUp() {
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ fetchSuccess, setFetchSuccess ] = useState(false);
  const [message, setMessage] = useState('');

  const enabled =
    firstName.length > 0 &&
    lastName.length > 0 &&
    email.length > 0 &&
    password.length > 0;

  async function handleRegister() {
    const response = await registerService.register({firstName, lastName, email, password});
    setFetchSuccess(response.success);
    setMessage(response.message);
  }


  return (
    <View style={styles.container}>
      <TextInput
        label="First Name"
        name="firstName"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        label="Last Name"
        name="lastName"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        label="E-mail"
        name="email"
        placeholder="email@gmail.com"
        value={email}
        onChangeText={setEmail}
      />
       <TextInput
       label="Password"
        name="password"
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Sign Up" onPress={handleRegister} disabled={!enabled}/>
      <Text>{message}</Text>
      { fetchSuccess ?
        (<Pressable onPress={() => navigation.navigate('SignUp')}>
          <Text>Realize o login para acessar o Blog</Text>
        </Pressable>)
        : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
