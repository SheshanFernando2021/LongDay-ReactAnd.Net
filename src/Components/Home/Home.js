import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import Clock from "../Clock/Clock";

const Home = ({ navigation }) => {
  const DummyList = [
    {
      id: 1,
      title: "Meeting",
      date: "2022-01-01",
      time: "10:00 AM",
      description: "Meeting with client",
    },
    {
      id: 2,
      title: "Dinner",
      date: "2022-01-02",
      time: "5:00 PM",
      description: "Dinner with friends",
    },
    {
      id: 3,
      title: "Grocery",
      date: "2022-01-03",
      time: "12:00 PM",
      description: "Grocery shopping",
    },
    {
      id: 4,
      title: "Shopping",
      date: "2022-01-04",
      time: "8:00 AM",
      description: "Shopping for clothes",
    },
    {
      id: 5,
      title: "Work",
      date: "2022-01-05",
      time: "9:00 AM",
      description: "Work on project",
    },
    {
      id: 6,
      title: "Exercise",
      date: "2022-01-06",
      time: "4:00 PM",
      description: "Go to gym",
    },
    {
      id: 7,
      title: "Sleep",
      date: "2022-01-07",
      time: "11:00 PM",
      description: "Go to bed",
    },
    {
      id: 8,
      title: "Rest",
      date: "2022-01-08",
      time: "6:00 AM",
      description: "Take a nap",
    },
    {
      id: 9,
      title: "Study",
      date: "2022-01-09",
      time: "1:00 PM",
      description: "Study for exam",
    },
  ];

  return (
    <SafeAreaView>
      <View>
        <View style={styles.clock}>
          <Clock />
        </View>
        <TouchableOpacity style={styles.AddButton} onPress={() => navigation.navigate("Entry")}>
          <Text style={styles.AddIcon}>+</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.h1}>LongDay</Text>
        </View>
      </View>

      <ScrollView style={styles.list}>
        {DummyList.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            onPress={() => navigation.navigate('Details', { item })} // Pass the item
          >
            <Text style={styles.itemTime}>{item.time}</Text>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDate}>{item.date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#635E61",
  },
  clock: {
    top: 5,
    left: -60,
  },
  h1: {
    fontSize: 36,
    color: "black",
    textAlign: "center",
    paddingTop: 20,
  },
  AddButton: {
    height: 50,
    width: 50,
    backgroundColor: "#3D373A",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    left: 280,
    top: 20,
    borderColor: "black",
    borderWidth: 1,

    shadowColor: "lightblue", // Color of the shadow
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 2,
    shadowRadius: 10,

    elevation: 9,
  },
  AddIcon: {
    fontSize: 30,
    color: "white",
  },
  DeleteButton: {
    height: 50,
    width: 60,
    backgroundColor: "#FF2323",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    left: 270,
    bottom: 30,
    borderColor: "black",
    borderWidth: 1,

    shadowColor: "lightblue", // Color of the shadow
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 2,
    shadowRadius: 10,

    elevation: 9,
  },
  DeleteIcon: {
    fontSize: 15,
    color: "white",
  },
  list: {
    marginTop: 20, // Space between the clock and the list (iOS)
    padding: 16, // Adds padding around the ScrollView
    height: "70%", // Set height to 60% of the parent container
  },
  item: {
    gap: 30, // Space between items on the left and right (iOS)
    flexDirection: "row", // Items are displayed horizontally
    backgroundColor: "#B1AEB0", // White background for items
    padding: 15, // Padding inside each item
    borderRadius: 10, // Rounded corners
    marginVertical: 8, // Vertical spacing between items
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0, // Horizontal shadow offset
      height: 2, // Vertical shadow offset
    },
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 4, // Shadow blur radius
    elevation: 2, // Elevation for Android
    marginBottom: 25, // Space between items on the bottom (iOS)
  },
  itemTitle: {
    flex: 1,
    textAlign: "Left", // Left-align text for better readability
    backgroundColor: "transparent", // Transparent background for text
    justifyContent: "center", // Center text vertically
    fontSize: 16, // Font size for item title
    fontWeight: "bold", // Bold font weight
    color: "#333", // Darker text color for better contrast
  },
  itemTime: {
    width: 70,
    textAlign: "center", // Right-align text for better readability
    backgroundColor: "black",
    borderRadius: 10,
    padding: 2, // Padding around the time text
    color: "white", // White text color for better visibility
  },
  itemDate: {
    width: 80,
    textAlign: "right", // Right-align text for better readability
  },
});

export default Home;
