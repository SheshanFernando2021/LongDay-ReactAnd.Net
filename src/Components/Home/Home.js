
// import {
//   View,
//   Text,
//   SafeAreaView,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
//   ActivityIndicator,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import Clock from "../Clock/Clock";

// const Home = ({ navigation }) => {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://mobileapp-webapp-service.azurewebsites.net/api/item");
//         const data = await response.json();
//         setItems(data); // Assuming the response is an array of items
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <View>
//         <View style={styles.clock}>
//           <Clock />
//         </View>
//         <TouchableOpacity style={styles.AddButton} onPress={() => navigation.navigate("Entry")}>
//           <Text style={styles.AddIcon}>+</Text>
//         </TouchableOpacity>
//         <View>
//           <Text style={styles.h1}>LongDay</Text>
//         </View>
//       </View>

//       <ScrollView style={styles.list}>
//         {items.map((item) => (
//           <TouchableOpacity
//             key={item.itemId}
//             style={styles.item}
//             onPress={() => navigation.navigate('Details', { item })}
//           >
//             <Text style={styles.itemTime}>{item.time}</Text>
//             <Text style={styles.itemTitle}>{item.itemTitle}</Text>
//             <Text style={styles.itemDate}>{item.date}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#635E61",
//   },
//   clock: {
//     top: 5,
//     left: -60,
//   },
//   h1: {
//     fontSize: 36,
//     color: "black",
//     textAlign: "center",
//     paddingTop: 20,
//   },
//   AddButton: {
//     height: 50,
//     width: 50,
//     backgroundColor: "#3D373A",
//     borderRadius: 13,
//     justifyContent: "center",
//     alignItems: "center",
//     left: 280,
//     top: 20,
//     borderColor: "black",
//     borderWidth: 1,
//     shadowColor: "lightblue",
//     shadowOffset: {
//       width: 5,
//       height: 5,
//     },
//     shadowOpacity: 2,
//     shadowRadius: 10,
//     elevation: 9,
//   },
//   AddIcon: {
//     fontSize: 30,
//     color: "white",
//   },
//   list: {
//     marginTop: 20,
//     padding: 16,
//     height: "70%",
//   },
//   item: {
//     gap: 30,
//     alignContents: "center",
//     alignItems: "center",
//     flexDirection: "row",
//     backgroundColor: "#B1AEB0",
//     padding: 15,
//     borderRadius: 10,
//     marginVertical: 8,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//     marginBottom: 25,
//   },
//   itemTitle: {
//     flex: 1,
//     textAlign: "left",
//     backgroundColor: "transparent",
//     justifyContent: "center",
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   itemTime: {
//     width: 70,
//     textAlign: "center",
//     backgroundColor: "black",
//     borderRadius: 10,
//     padding: 2,
//     color: "white",
//   },
//   itemDate: {
//     width: 80,
//     textAlign: "right",
//   },
// });

// export default Home;

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Clock from "../Clock/Clock";

const Home = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("https://mobileapp-webapp-service.azurewebsites.net/api/item");
      const data = await response.json();
      setItems(data); // Assuming the response is an array of items
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch

    const intervalId = setInterval(() => {
      fetchData(); // Fetch data every 5 seconds
    }, 5000);

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
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
        {items.map((item) => (
          <TouchableOpacity
            key={item.itemId}
            style={styles.item}
            onPress={() => navigation.navigate('Details', { item })}
          >
            <Text style={styles.itemTime}>{item.time}</Text>
            <Text style={styles.itemTitle}>{item.itemTitle}</Text>
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
    shadowColor: "lightblue",
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
  list: {
    marginTop: 20,
    padding: 16,
    height: "70%",
  },
  item: {
    gap: 30,
    alignContents: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#B1AEB0",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 25,
  },
  itemTitle: {
    flex: 1,
    textAlign: "left",
    backgroundColor: "transparent",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  itemTime: {
    width: 70,
    textAlign: "center",
    backgroundColor: "black",
    borderRadius: 10,
    padding: 2,
    color: "white",
  },
  itemDate: {
    width: 80,
    textAlign: "right",
  },
});

export default Home;
