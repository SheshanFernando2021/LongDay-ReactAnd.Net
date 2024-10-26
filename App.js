import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/Components/Home/Home";
import Entry from "./src/Components/Entry/Entry";
import Details from "./src/Components/Details/Details";
import Delete from "./src/Components/Delete/Delete";
import Clock from "./src/Components/Clock/Clock";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Home"  component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Entry" component={Entry} /> 
    </Stack.Navigator>
    <StatusBar options="auto"  hidden={true}/>


  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#635E61",
  },

});
