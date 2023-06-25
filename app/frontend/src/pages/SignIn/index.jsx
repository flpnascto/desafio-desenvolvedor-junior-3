import React,  { useContext } from "react";
import { View, Button, StyleSheet } from "react-native";
import { AuthContext } from "../../contexts/auth";

export default function SignIn() {
  const { signed, signIn } = useContext(AuthContext);

  console.log(signed);

  function handleSign() {
    signIn();
  }
  
  return (
    <View style={styles.container}>
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