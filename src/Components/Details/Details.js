import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Navigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Details = ({ route }) => {
  const { item } = route.params; // Get the item from route params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.time}>{item.time}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  date: {
    fontSize: 18,
    color: "#666",
  },
  time: {
    fontSize: 18,
    color: "#666",
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Details;
