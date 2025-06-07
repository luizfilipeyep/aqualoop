import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Waves from "./components/Waves"
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Waves />

      <TouchableOpacity style={styles.buttonHigh}>
        <Text style={styles.buttonHighText}>Mais informações: Clima, Histórico...</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  buttonHigh: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "#D5E9F4",
    marginVertical: 10
  },
  buttonHighText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#4A96D0"
  }
});
