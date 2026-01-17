import { StyleSheet, Button, Image, Pressable, Text, TouchableOpacity, View, useColorScheme} from "react-native";

export default function Index() {
    const theme = useColorScheme();
    const isDark = theme === "dark";

    const backgroundColor = isDark ? 'black' : "white";
    const textColor = isDark ? 'white' : 'black';
  return (
    <View
        style={[
            styles.view,
            {backgroundColor: backgroundColor}
        ]}
    >
      <Text 
        style={[
            styles.text,
            {color: textColor}
        ]}
      >Hello World from First React-Native with Expo</Text>

      <Image 
      style={styles.image}
      source={{ uri: "https://avatars.githubusercontent.com/u/215825821?v=4"}} />

    <Pressable
    style={styles.button}
    >
      <Text
      style={styles.btnText}
      >Press me for Query.....</Text>
    </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        height: '100%',
        width: '100%',
        gap: 10,
    },

    text: {
        fontSize:30,
        textAlign: "center",
        fontWeight: "bold",
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: "contain",
    },
    button: {
        backgroundColor: "gray",
        padding: 5,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    btnText: {
        color: "white",
        fontSize:20,
        fontWeight: "bold",
    },
})



{/* <TouchableOpacity style={{
  padding: 10,
  backgroundColor: "cyan"
}}
onPress={() => alert('Pressed')}
>
  <Text>Press me......</Text>
</TouchableOpacity> */}

{/*We wouldn't use it */}
{/* <Button title="Press me"></Button> */}