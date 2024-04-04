import { View, Text, TextInput, Pressable } from 'react-native';
import {useState} from 'react';

import styles from './styles';

//export default function Atividade4 () {
    //return(
        //<View style={styles.container}>
           // <Text style={styles.titulo}>Atividade 4</Text>
        //</View>
    //)
//}

export default function Exemplo4 (){
    
    const [txtDigitado, setTxtDigitado] = useState ('Texto digitado');
    const [txt2, setTxt2] = useState ('');
    const [txtTela, setTxtTela] = useState ('');
    const [txt1, setTxt1] = useState ('');
    const [txtTela1, setTxtTela1] = useState ('');

    function atualizaTextoHandle(txt){
        setTxtDigitado(txt);
    }

    function handleExibeTexto (){
        setTxtTela(txt2);
        setTxt2('');
    }


    return(
        <View style = {styles.container}>
            <Text style = {styles.titulo}>Exemplo 4</Text>

            <Text style = {styles.texto}>{txtTela}</Text>

            <Text style = {styles.textogrifado}>Nome:</Text>
         
            <TextInput 
            style = {styles.input}
            onChangeText={(vlr) => setTxt1 (vlr)}
            value={txt1}
            />

            <Text style = {styles.textogrifado}>Sobrenome:</Text>

            <TextInput 
            style = {styles.input}
            onChangeText={(vlr) => setTxt2 (vlr)}
            value={txt2}
            />

            <Pressable 
            style={({ pressed }) => pressed ? [styles.botao, styles.botaoPress] : styles.botao}
            onPress={() => handleExibeTexto()}
            >
                <Text style = {styles.txtBotao}>Exibir texto</Text>
            </Pressable>
        </View>

    );
}

