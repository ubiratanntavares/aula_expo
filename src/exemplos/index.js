import { View, Pressable, Text } from "react-native-web";

export default function Exemplos( { navigation } ) {
    return(
        <View>
            <Pressable onPress={() => navigation.navigate('Exemplo2')}>
                <Text> Exemplo 2</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Exemplo3')}>
                <Text> Exemplo 3</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Exemplo4')}>
                <Text> Exemplo 4</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Exemplo5')}>
                <Text> Exemplo 5</Text>
            </Pressable>
        </View>
    );
}