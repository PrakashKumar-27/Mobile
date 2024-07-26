// screens/LoginScreen.tsx
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Image } from "react-native";

const LoginScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simple validation for demo purposes
    if (username && password) {
      if (username == "admin" && password == "pass123") {
        navigation.navigate("Home");
      } else {
        alert("Please enter valid credentials!");
      }
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.loginLogo}
      />

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    width: "100%",
    marginBottom: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  loginLogo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default LoginScreen;
