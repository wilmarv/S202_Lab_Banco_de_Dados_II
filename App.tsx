import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Usuario from './src/model/Usuario';
import ConnectDb from './src/neo4J/ConnectDb';

export default function App() {

  const newConnect = new ConnectDb();

  const newUsuario: Usuario = new Usuario("teste", "teste@emai.com");

  newConnect.createNewUsuario(newUsuario);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
