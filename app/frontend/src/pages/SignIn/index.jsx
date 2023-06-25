import React,  { useContext, useState } from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";
import { AuthContext } from "../../contexts/auth";

export default function SignIn() {
  const { signIn } = useContext(AuthContext);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  function handleSign() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <TextInput
        name="email"
        placeholder="email"
        value={email}
        onChangeText={setEmail}
      />
       <TextInput
        name="password"
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Sign In" onPress={handleSign} />
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