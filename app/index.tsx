import { Text, View } from "react-native";



const App = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default App;





// StackNavigator
// import { Text, View,  StyleSheet} from "react-native";
// import Home from "../src/screens/Home";
// import { createStackNavigator } from '@react-navigation/stack';
// import Profile from "@/src/screens/Profile";
// import Search from "@/src/screens/Search";
// import { NavigationContainer } from '@react-navigation/native';

// const Stack = createStackNavigator();

// const StackNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Search" component={Search} />
//     </Stack.Navigator>
//   )
// }

// const App = () => {
//   return (
//   <NavigationContainer>
//     <StackNavigator />
//   </NavigationContainer>
//   )
// }

// export default App;




// This Handling input

// import { StyleSheet, Button, Image, Pressable, Text, TouchableOpacity, View, useColorScheme, TextInput } from "react-native";
// import { useState } from "react";

// export default function Index() {

//   const [text, setText] = useState("");
//   const [submittedText, setSubmittedText] = useState('');

//   const handleSubmit  = () => {
//     setSubmittedText(text);
//     setText('');
//   }

//   return (
//     <View
//     style={styles.container}
//     >
//       <Text
//       style={styles.text}
//       >Text Input..</Text>

//       <TextInput 
//       placeholder="Enter a Text"
//       style={styles.input}
//       value={text}
//       onChangeText={setText}
//       multiline
//       numberOfLines={4}
//       />
//       <Button 
//       title="Submit"
//       onPress={handleSubmit}
//       ></Button>

//       {submittedText ? (<Text>Result: {submittedText}</Text>) : null}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   text: {
//     fontSize: 30,
//     fontWeight: "bold",
//     color: "red"
//   },
//   input: {
//     width: '100%',
//     borderColor: 'gray',
//     padding: 5,
//     margin: 20,
//     borderWidth: 1,
//     borderRadius: 5
//   }
// })







// this for color theme

// const theme = useColorScheme();
// const isDark = theme === "dark";

// const backgroundColor = isDark ? 'black' : "white";
// const textColor = isDark ? 'white' : 'black';

// <View
//   style={[
//     styles.view,
//     { backgroundColor: backgroundColor }
//   ]}
// >
//   <Text
//     style={[
//       styles.text,
//       { color: textColor }
//     ]}
//   >Hello World from First React-Native with Expo...</Text>

//   <Image
//     style={styles.image}
//     source={{ uri: "https://avatars.githubusercontent.com/u/215825821?v=4" }} />

//   <Pressable
//     style={styles.button}
//   >
//     <Text
//       style={styles.btnText}
//     >Press me for Query.....</Text>
//   </Pressable>


//   <View style={styles.box1}></View>
//   <View style={styles.box2}></View>
//   <View style={styles.box3}></View>

// </View>

// const styles = StyleSheet.create({
  //   view: {
    //     // using flex
    //     // flex isn't work like web
    //     flex: 2,
    //     height: '100%',
    //     width: '100%',
//     gap: 10,
//   },
//   box1: {
//     flex: 1,
//     width: 100,
//     height: 100,
//     backgroundColor: "red",
//   },
//   box2: {
//     flex: 1,
//     backgroundColor: "green",
//     width: 100,
//     height: 100,
//   },
//   box3: {
//     width: 100,
//     height: 100,
//     flex: 1,
//     backgroundColor: "blue",
//   },

//   text: {
//     flex: 3,
//     fontSize: 20,
//     textAlign: "center",
//     fontWeight: "bold",
//   },
//   image: {
//     flex: 10,
//     width: 300,
//     height: 300,
//     resizeMode: "contain",
//   },
//   button: {
//     flex: 1,
//     backgroundColor: "gray",
//     padding: 5,
//     margin: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10,
//   },
//   btnText: {
//     color: "white",
//     fontSize: 20,
//     fontWeight: "bold",
//   },
// })



{/* <TouchableOpacity style={{
  padding: 10,
  backgroundColor: "cyan"
}}
onPress={() => alert('Pressed')}
>
  <Text>Press me......</Text>
</TouchableOpacity> */}

{/*We wouldn't use it */ }
{/* <Button title="Press me"></Button> */ }