import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const Details = ({ route, navigation }) => {
  const { item } = route.params; // Get the item from route params

  const handleDelete = () => {
    Alert.alert("Delete Item", "Are you sure you want to delete this item?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: () => {
          // Handle deletion logic here
          navigation.goBack(); // Navigate back after deletion
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.time}>{item.time}</Text>
      <Text style={styles.description}>{item.description}</Text>
      
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9", // Light grey background for contrast
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  date: {
    fontSize: 20,
    color: "#666",
    marginBottom: 5,
  },
  time: {
    fontSize: 20,
    color: "#666",
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    color: "#444",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  deleteButton: {
    backgroundColor: "#FF2323", // Red color for delete button
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%", // Full width of the screen
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Details;
