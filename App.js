import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/Components/Home/Home";
import Entry from "./src/Components/Entry/Entry";
import Details from "./src/Components/Details/Details";
import Delete from "./src/Components/Delete/Delete";
import Clock from "./src/Components/Clock/Clock";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#635E61",
  },
});
