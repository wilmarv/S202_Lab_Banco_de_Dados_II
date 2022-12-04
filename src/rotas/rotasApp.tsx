import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderSteam from '../componentes/HeaderSteam';


import Home from '../view/Home';
import Profile from "../view/profile"
import NewProfile from "../view/newProfile"

const Stack = createStackNavigator();

function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={() => ({
                header: () => <HeaderSteam />
            })}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="NewProfile" component={NewProfile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Rotas;