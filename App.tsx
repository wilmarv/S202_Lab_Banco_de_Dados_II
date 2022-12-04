import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Rotas from './src/rotas/RotasApp';


export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <Rotas />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
