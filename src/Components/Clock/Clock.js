import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const Clock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format date and time
  const formattedTime = dateTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const formattedDate = dateTime.toLocaleDateString("en-GB"); // DD/MM/YYYY format
  const dayName = dateTime.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <View style={styles.container}>
      <Text
        style={styles.dateTime}
      >{`${formattedTime} - ${formattedDate} - ${dayName}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  dateTime: {
    fontSize: 15,
    color: "#FFCBCB",
  },
});

export default Clock;
