import { Button, Text, View } from 'react-native'

const Home = ({ navigation} : any) => {
    return (
        <View>
            <Text style={{
                fontSize: 30,
                fontWeight: "bold",
                color: "red",
                textAlign: "center",
                padding: 20,
                margin: 20,
            }}>Hello, World</Text>
            <Button title='Home'
            onPress={() => navigation.navigate('Profile')}
            />
        </View>
    )
}

export default Home