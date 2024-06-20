import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Exemplos from '../exemplos';
import Exemplo2 from '../ex_2';
import Exemplo3 from '../ex_3';
import Exemplo4 from '../ex_4';
import Exemplo5 from '../ex_5';


const Stack = createNativeStackNavigator();

function NavegacaoStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Exemplos" component={Exemplos} />
                <Stack.Screen name="Exemplo2" component={Exemplo2} />
                <Stack.Screen name="Exemplo3" component={Exemplo3} />
                <Stack.Screen name="Exemplo4" component={Exemplo4} />
                <Stack.Screen name="Exemplo5" component={Exemplo5} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavegacaoStack;