// import { useState } from 'react';
// import { View } from 'react-native';

// import Button from './button';
// import Display from './display';

// import styles from './styles';

// export default function Exemplo7() {

//     const [displayValue, setDisplayValue] = useState('0');
//     const [clearDisplay, setClearDisplay] = useState(false);
//     const [operation, setOperation] = useState(null);
//     const [values, setValues] = useState([0, 0]);
//     const [current, setCurrent] = useState(0);

//     function addDigit(n) {

//         const limpaTela = displayValue === '0' || clearDisplay;

//         if (n === '.' && !limpaTela && displayValue.includes('.')) {
//             return;
//         }

//         const currentValue = limpaTela ? '' : displayValue;
//         const valorAtualizar = currentValue + n;

//         if (n !== '.') {
//             const novoValor = parseFloat(valorAtualizar);
//             const atualizaValor = values;
//             atualizaValor[current] = novoValor;
//             setValues(atualizaValor);
//         }

//         setDisplayValue(valorAtualizar);
//         setClearDisplay(false);

//     }

//     function clearMemory() {
//         setDisplayValue('0');
//         setClearDisplay(false);
//         setOperation(null);
//         setValues([0, 0]);
//         setCurrent(0);
//     }

//     function definieOperacao(operacao) {        
//         if (current === 0) {
//             setOperation(operacao);
//             setCurrent(1);
//             setClearDisplay(true);
//         } else {
//             const sinalIgual = operacao === '=';  
//             if (!sinalIgual) {
//                 setOperation(operacao);
//             }
//             const valores = values;

//             // valores[0] = eval(valores[0] + operation + valores[1]);
//             valores[0] = calculo(valores[0], valores[1], operation);
//             valores[1] = 0;
//             setDisplayValue(values[0].toString());
//             // setOperation(sinalIgual ? 0 : 1);
//             setClearDisplay(true);
//             setValues(valores);
//         }
//     } 

//     function calculo (valor1, valor2, operacao) {
//         if (operacao === '+') return parseFloat(valor1) + parseFloat(valor2);
//         if (operacao === '-') return parseFloat(valor1) - parseFloat(valor2);
//         if (operacao === '*') return parseFloat(valor1) * parseFloat(valor2);
//         if (operacao === '/') return parseFloat(valor1) / parseFloat(valor2);
//     }

//     return (
//         <View style={styles.container}>
//             <Display value={displayValue} />
//             <View style={styles.buttons}>
//                 <Button label='AC' triple onClick={() => clearMemory()} />
//                 <Button label='/' operation onClick={definieOperacao} />
//                 <Button label='7' onClick={addDigit} />
//                 <Button label='8' onClick={addDigit} />
//                 <Button label='9' onClick={addDigit} />
//                 <Button label='*' operation onClick={definieOperacao} />
//                 <Button label='4' onClick={addDigit} />
//                 <Button label='5' onClick={addDigit} />
//                 <Button label='6' onClick={addDigit} />
//                 <Button label='-' operation onClick={definieOperacao} />
//                 <Button label='1' onClick={addDigit} />
//                 <Button label='2' onClick={addDigit} />
//                 <Button label='3' onClick={addDigit} />
//                 <Button label='+' operation onClick={definieOperacao} />
//                 <Button label='0' double onClick={addDigit} />
//                 <Button label='.' onClick={addDigit} />
//                 <Button label='=' operation onClick={definieOperacao} />
//             </View>
//         </View>
//     );
// }


import { useState } from 'react';
import { View } from 'react-native';

import Button from './button';
import Display from './display';

import styles from './styles';

export default function Exemplo7() {

    const [displayValue, setDisplayValue] = useState('0');
    const [clearDisplay, setClearDisplay] = useState(false);
    const [operation, setOperation] = useState(null);
    const [values, setValues] = useState([0, 0]);
    const [current, setCurrent] = useState(0);

    function addDigit(n) {

        const limpaTela = displayValue === '0' || clearDisplay;

        if (n === '.' && !limpaTela && displayValue.includes('.')) {
            return;
        }

        const currentValue = limpaTela ? '' : displayValue;
        const valorAtualizar = currentValue + n;

        if (n !== '.') {
            const novoValor = parseFloat(valorAtualizar);
            const atualizaValor = [...values]; // Linha alterada: clone o array
            atualizaValor[current] = novoValor;
            setValues(atualizaValor);
        }

        setDisplayValue(valorAtualizar);
        setClearDisplay(false);

    }

    function clearMemory() {
        setDisplayValue('0');
        setClearDisplay(false);
        setOperation(null);
        setValues([0, 0]);
        setCurrent(0);
    }

    function definieOperacao(operacao) {        
        if (current === 0) {
            setOperation(operacao);
            setCurrent(1);
            setClearDisplay(true);
        } else {
            const sinalIgual = operacao === '=';  
            const valores = [...values]; // Linha alterada: clone o array

            // valores[0] = eval(valores[0] + operation + valores[1]);
            valores[0] = calculo(valores[0], valores[1], operation);
            valores[1] = 0;

            if (isNaN(valores[0]) || !isFinite(valores[0])) { // Linha alterada: checar NaN ou Infinito
                clearMemory();
                return;
            }

            setDisplayValue(valores[0].toString());
            setOperation(sinalIgual ? null : operacao); // Linha alterada: defina a operação apenas se não for '='
            setClearDisplay(!sinalIgual); // Linha alterada: limpe a tela se não for '='
            setValues(valores);
            setCurrent(sinalIgual ? 0 : 1); // Linha alterada: ajuste o current com base no sinalIgual
        }
    } 

    function calculo (valor1, valor2, operacao) {
        if (operacao === '+') return parseFloat(valor1) + parseFloat(valor2);
        if (operacao === '-') return parseFloat(valor1) - parseFloat(valor2);
        if (operacao === '*') return parseFloat(valor1) * parseFloat(valor2);
        if (operacao === '/') return parseFloat(valor2) !== 0 ? parseFloat(valor1) / parseFloat(valor2) : NaN; // Linha alterada: prevenir divisão por zero
        return valor1; // Linha alterada: caso a operação seja inválida, retorne valor1
    }

    return (
        <View style={styles.container}>
            <Display value={displayValue} />
            <View style={styles.buttons}>
                <Button label='AC' triple onClick={() => clearMemory()} />
                <Button label='/' operation onClick={() => definieOperacao('/')} /> {/* Linha alterada: passe o operador diretamente */}
                <Button label='7' onClick={() => addDigit('7')} /> {/* Linha alterada: passe o dígito diretamente */}
                <Button label='8' onClick={() => addDigit('8')} />
                <Button label='9' onClick={() => addDigit('9')} />
                <Button label='*' operation onClick={() => definieOperacao('*')} />
                <Button label='4' onClick={() => addDigit('4')} />
                <Button label='5' onClick={() => addDigit('5')} />
                <Button label='6' onClick={() => addDigit('6')} />
                <Button label='-' operation onClick={() => definieOperacao('-')} />
                <Button label='1' onClick={() => addDigit('1')} />
                <Button label='2' onClick={() => addDigit('2')} />
                <Button label='3' onClick={() => addDigit('3')} />
                <Button label='+' operation onClick={() => definieOperacao('+')} />
                <Button label='0' double onClick={() => addDigit('0')} />
                <Button label='.' onClick={() => addDigit('.')} />
                <Button label='=' operation onClick={() => definieOperacao('=')} />
            </View>
        </View>
    );
}
