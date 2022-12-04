import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderSteam from '../componentes/HeaderSteam';
import Home from '../view/Home';

const Stack = createStackNavigator();

function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={() => ({
                header: () => <HeaderSteam />,
            })}>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Rotas;