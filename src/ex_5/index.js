import { useState } from 'react';
import { View, Pressable, Text, TextInput } from 'react-native';

export default function Exemplo05 () {

    const [isFocusN1, setIsFocusN1] = useState(false);
    const [isFocusN2, setIsFocusN2] = useState(false);
    const [isFocusTotal, setIsFocusTotal] = useState(false);
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState ('');

    function soma() {
        setTotal(parseFloat(n1) + parseFloat(n2));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo} Exemplo 5 </Text>
        </View>
    );

  

}
