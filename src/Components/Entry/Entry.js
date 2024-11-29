import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

const Entry = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [description, setDescription] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  const handleSubmit = async () => {
    const formattedDate = date.toISOString().split('T')[0];
    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }); 

    const entryData = {
      itemTitle: title,
      date: formattedDate,
      time: formattedTime,
      itemDescription: description,
      categoryId: 1, 
    };

    if (!title || !description) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    console.log("Submitting data:", JSON.stringify(entryData)); 

    try {
      const response = await fetch("https://mobileapp-webapp-service.azurewebsites.net/api/item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entryData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error("Response data:", responseData); 
        Alert.alert("Error", `Failed to submit entry: ${responseData.message || response.statusText}`);
        return;
      }

      Alert.alert("Success", "Entry submitted successfully!");
     
      setTitle("");
      setDescription("");
      setDate(new Date());
      setTime(new Date());
    } catch (error) {
      console.error("Error submitting entry: ", error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter title"
        placeholderTextColor="#A9A9A9"
      />

      <View style={styles.row}>
        <TouchableOpacity style={styles.dateTimeContainer} onPress={() => setShowDatePicker(true)}>
          <Text style={styles.label}>Date:</Text>
          <TextInput
            style={styles.input}
            value={date.toISOString().split('T')[0]} // YYYY-MM-DD
            editable={false}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.dateTimeContainer} onPress={() => setShowTimePicker(true)}>
          <Text style={styles.label}>Time:</Text>
          <TextInput
            style={styles.input}
            value={time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })} // HH:MM AM/PM
            editable={false}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.textArea}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
        placeholderTextColor="#A9A9A9"
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={handleTimeChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1A1A1A",
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: "#FFFF",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: "lightgray",

  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  dateTimeContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  textArea: {
    textAlign: "left",
    textAlignVertical: "top",
    height: 300,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    color: "lightgray",

  },
  submitButton: {
    backgroundColor: "#3D373A",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Entry;
