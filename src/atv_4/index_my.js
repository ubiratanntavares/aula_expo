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
    
    const [txt1, setTxt1] = useState (''); //Nome
    const [txtTela1, setTxtTela1] = useState ('');
    const [txt2, setTxt2] = useState (''); //Sobrenome
    const [txtTela, setTxtTela] = useState ('');
  
    function handleExibeTexto (){
        setTxtTela1(txt1);
        setTxt1('');
        setTxtTela(txt2);
        setTxt2('');
    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.titulo}>Exemplo 4</Text>

            <View style = {styles.unir}>
            
            <Text style = {styles.texto}>{[txtTela1]}</Text>
            <Text style = {styles.texto}>{[txtTela]}</Text>
            
            </View>

            <Text style = {styles.textogrifado}>Nome:</Text>
         
            <TextInput style = {styles.input} onChangeText={(vlr) => setTxt1 (vlr)}
            value={txt1}
            />

            <Text style = {styles.textogrifado}>Sobrenome:</Text>

            <TextInput style = {styles.input} onChangeText={(vlr) => setTxt2 (vlr)}
            value={txt2} 
            />

            <Pressable style={({ pressed }) => pressed ? [styles.botao, styles.botaoPress] : styles.botao}
            onPress={() => handleExibeTexto()}
            >
                <Text style = {styles.txtBotao}>Nome completo</Text>
            </Pressable>
        </View>

    );
}

