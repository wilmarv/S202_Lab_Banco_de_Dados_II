import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Container from './src/componentes/Container';
import HeaderSteam from './src/componentes/HeaderSteam';
import Rotas from './src/rotas/rotasApp';


export default function App() {


  return (
    <View style={styles.container}>
      <StatusBar style="inverted" translucent={true} />
      <HeaderSteam />
      <Rotas />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

});
