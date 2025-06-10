import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Waves from "./components/Waves"
import Header from './components/Header';
import SystemButton from './components/SystemButton';
import Humidity from './components/Humidity';
import Weather from './components/Weather';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Waves />

      <TouchableOpacity style={styles.buttonHigh}>
        <Text style={styles.buttonHighText}>Mais informações: Clima, Histórico...</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <SystemButton />
        <Humidity />
        <Weather />
      </View>

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
    height: 40,
    borderRadius: 25,
    backgroundColor: "#D5E9F4",
    marginVertical: 10
  },
  buttonHighText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4A96D0"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5
  }
});
