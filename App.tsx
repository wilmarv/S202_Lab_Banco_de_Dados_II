import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Rotas from './src/rotas/RotasApp';


export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <Rotas />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
