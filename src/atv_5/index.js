import { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';

import styles from './styles';

export default function Atividade5() { 

    const [isFocusN1, setIsFocusN1] = useState(false);
    const [isFocusN2, setIsFocusN2] = useState(false);
    const [isFocusTotal, setIsFocusTotal] = useState(false);
    const [mudsinal,setmudsinal] = useState(''); //const para mudar o sinal


    const [n1, setN1] = useState(0); 
    const [n2, setN2] = useState(0); 
    const [total, setTotal] = useState(0); 

    function soma() {
        setTotal(parseFloat(n1) + parseFloat(n2));
    }
    function subtracao() {
        setTotal(parseFloat(n1) - parseFloat(n2));
    }
    function multi() {
        setTotal(parseFloat(n1) * parseFloat(n2));
    }
    function divisao() {
        setTotal(parseFloat(n1) / parseFloat(n2));
    }
    function zerar() {
        setTotal('');
    }
    function handleOne(){
        soma(),
        setmudsinal('+')
    }
    function handleTwo(){
        subtracao(),
        setmudsinal('-')
    }
    function handleTree(){
        multi(),
        setmudsinal('*')
    }
    function handleFour(){
        divisao(),
        setmudsinal('/')
    }
    function handleZerar(){
        zerar(),
        setmudsinal('')
    }


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo 5 </Text>

            <Text style={styles.txtSaida}> Calculadora básica </Text>

            <Text style={styles.textLabel}> 1º número </Text>
            <TextInput
                style={
                    [
                        styles.txtEntrada, 
                            isFocusN1 ? 
                                {
                                    borderColor: '#C51162',                                     
                                    outline: 'none', 
                                } 
                            : 
                                {}
                    ]
                }
                onFocus={() => setIsFocusN1(true)}
                onBlur={() => setIsFocusN1(false)} 
                onChangeText={(num1) => setN1(num1)}
                value={n1}
                // keyboardType='numeric'

            />
        

        <Text style={styles.txtSaida}> {mudsinal} </Text>

            <Text style={styles.textLabel}> 2º número </Text>
            <TextInput
                style={
                    [
                        styles.txtEntrada, 
                            isFocusN2 ? 
                                {
                                    borderColor: '#C51162',                                     
                                    outline: 'none', 
                                } 
                            : 
                                {}
                    ]
                }
                onFocus={() => setIsFocusN2(true)}
                onBlur={() => setIsFocusN2(false)} 
                onChangeText={(num2) => setN2(num2)}
                value={n2}
            />



            <Text style={[styles.txtSaida, { margin: 0 }]}> = </Text>

            <Text style={styles.textLabel}> Total </Text>
            <TextInput
                style={
                    [
                        styles.txtEntrada, 
                            isFocusTotal ? 
                                {
                                    borderColor: '#C51162',                                     
                                    outline: 'none', 
                                } 
                            : 
                                {}
                    ]
                }
                onFocus={() => setIsFocusTotal(true)}
                onBlur={() => setIsFocusTotal(false)} 
                readOnly={true}
                value={total ? parseFloat(total).toFixed(2) : '0.00'}
            />
        <View style={styles.newbutton}>

            <Pressable
                onPress={handleOne}
                style={
                    ({pressed}) => pressed ? 
                        [styles.button, styles.buttonTouch] 
                    : 
                        styles.button
                }
            >
                <Text style={styles.textButton}> + </Text>
            </Pressable>

            <Pressable
                onPress={handleTwo}
                style={
                    ({pressed}) => pressed ? 
                        [styles.button, styles.buttonTouch] 
                    : 
                        styles.button
                }
            >
                <Text style={styles.textButton}> - </Text>
            </Pressable>

            <Pressable
                onPress={handleTree}
                style={
                    ({pressed}) => pressed ? 
                        [styles.button, styles.buttonTouch] 
                    : 
                        styles.button
                }
            >
                <Text style={styles.textButton}> * </Text>
            </Pressable>

            <Pressable
                onPress={handleFour}
                style={
                    ({pressed}) => pressed ? 
                        [styles.button, styles.buttonTouch] 
                    : 
                        styles.button
                }
            >
                <Text style={styles.textButton}> / </Text>
            </Pressable>
            </View>

            <Pressable
                onPress={handleZerar}
                style={
                    ({pressed}) => pressed ? 
                        [styles.button2, styles.buttonTouch] 
                    : 
                        styles.button2
                }
            >
                <Text style={styles.textButton}> Zerar </Text>
            </Pressable>

        </View>
    );
}