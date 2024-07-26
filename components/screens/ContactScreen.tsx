// screens/ContactScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTeam}>Abstract Autocrats Team</Text>
      <Text style={styles.textTeam}>&</Text>
      <Text style={styles.textTeam}>Rohit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  textTeam: {
    fontSize: 20,
    textAlign: "left",
    justifyContent: "flex-start",
    marginVertical: 10,
  },
});

export default ContactScreen;
