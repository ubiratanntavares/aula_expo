import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3f2fd',
        //justifyContent: 'center',
        padding: 18, 
        width: '100%',
        borderRadius: 20,

        //bordewidth: 4,
        //borderColor:'',
        //width: 300,
        //marginBottom: 8,
        //AlignItems: 'center',      
    },  
    paragraph: {
        margin: 24,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'orange', //cor da fonte
    },

    imagem: {
        width: '80%',
        resizeMode: 'center',
    },
    
});

export default styles;