import React, { useContext, useState } from "react";
import { View, Button, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { AuthContext } from "../../contexts/auth";

export default function SignIn({ navigation }) {
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
      <Text>
        Don't have an account?
        <Pressable
          onPress={() => navigation.navigate('SignUp')}
          style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
        >
          <Text>Sign Up</Text>
        </Pressable>
      </Text>
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