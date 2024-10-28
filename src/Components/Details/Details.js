import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const Details = ({ route, navigation }) => {
  const { item } = route.params;

  const handleDelete = async () => {
    Alert.alert("Delete Item", "Are you sure you want to delete this item?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: async () => {
          try {
            const response = await fetch(`https://mobileapp-webapp-service.azurewebsites.net/api/item/${item.itemId}`, {
              method: 'DELETE',
            });
            if (response.ok) {
              Alert.alert("Success", "Item deleted successfully!");
              navigation.goBack();
            } else {
              Alert.alert("Error", "Could not delete the item.");
            }
          } catch (error) {
            console.error("Error deleting item: ", error);
            Alert.alert("Error", "An error occurred while deleting the item.");
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{item.itemTitle}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.description}>{item.itemDescription}</Text>
        
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    padding: 20,
    backgroundColor: "#1A1A1A",
  },
  content: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#1B2A2D",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    alignItems: "center", // Center text horizontally
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFCBCB",
    marginBottom: 10,
  },
  date: {
    fontSize: 20,
    color: "#FFCBCB",
    marginBottom: 5,
  },
  time: {
    fontSize: 20,
    color: "#FFCBCB",
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    color: "#FFCBCB",
    textAlign: "center", // Center text
    marginBottom: 20,
  },
  deleteButton: {
    backgroundColor: "#FF2323",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Details;
