import { useState } from 'react';
import { View, Text } from 'react-native';
import Input from './input';
import styles from './styles';

import Botao from './botao';

export default function Exemplo6 () {

    const [peso, setPeso] = useState(null); 
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00);
    const mensErro = 'Valores inseridos de forma incorreta!'

    function calculaImc() {
        const tmpImc = peso / (altura * altura)
        if (isNaN(tmpImc)) {
            setImc('Valores inseridos de forma incorreta!');
        } else {
            setImc(tmpImc);
        }        
    }

    return(
        
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 6</Text>
            <View style={styles.ladoalado}>
            <Input placeholder='Peso' valor={peso} atualizaValor={setPeso} />
            <Input placeholder='Altura' valor={altura} atualizaValor={setAltura} />
            </View>

            <Text style={styles.imc}>{isNaN(imc) ? mensErro : imc.toFixed(2)}</Text>

            <Botao calcular={calculaImc}>Calcular</Botao>
            
        </View>
    
    )
}

