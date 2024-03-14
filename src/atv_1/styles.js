import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3f2fd',
        //justifyContent: 'center',
        padding: 18, 
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',  
        //bordewidth: 4,
        //borderColor:'',
        //width: 300,
        //marginBottom: 8,
        
           
    },  
    paragraph: {
        margin: 24,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'orange', //cor da fonte
    },

    imagem: {
        width: '100%',
        resizeMode: 'center',
    },
    
});

export default styles;