import React from "react";
import { View, Text, Button, ScrollView, StyleSheet, Image } from "react-native";

const crImg = require("../assets/clash-royale-logo.png");

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>My App</Text>

      <Image source={crImg} style={{ width: 200, height: 200, marginBottom: 20 }} />

      <View style={styles.buttonContainer}>
        <Button title="Button 1" onPress={() => {}} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Button 2" onPress={() => {}} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Button 3" onPress={() => {}} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Button 4" onPress={() => {}} />
      </View>

      <Text style={styles.lorem}>
        This activity focuses on building a simple React Native application that demonstrates the use of a scrollable layout combined with multiple button components. The app is structured with a ScrollView to allow vertical scrolling when the content exceeds the screen size, ensuring better usability on devices with smaller displays. At the top, a descriptive header text summarizes the activity, followed by four styled buttons placed inside the scrollable view. Each button is implemented using the Button component and separated visually with proper spacing through styles. To maintain cleaner and more organized code, all styles are managed using StyleSheet.create, which improves readability and makes it easier to modify the design. Overall, this exercise highlights fundamental concepts of React Native such as component structuring, layout management with ScrollView, and the separation of concerns using a stylesheet, serving as a foundation for more advanced mobile app development practices.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#121212", // dark background like Spotify
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width: "80%",
  },
  lorem: {
    color: "#ccc",
    fontSize: 16,
    marginTop: 20,
    lineHeight: 22,
  },
});
