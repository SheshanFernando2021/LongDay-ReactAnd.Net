import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from "react-native";
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

  const handleSubmit = () => {
    const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD
    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // HH:MM AM/PM
    console.log("Title:", title);
    console.log("Date:", formattedDate);
    console.log("Time:", formattedTime);
    console.log("Description:", description);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter title"
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
            value={time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} // HH:MM AM/PM
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
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color:"black"
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
