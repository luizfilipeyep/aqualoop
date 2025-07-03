// Página inicial

// Import de bibliotecas
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Link } from "expo-router"

// Import de components
import Waves from "../components/Waves"
import Header from "../components/Header"
import SystemButton from "../components/SystemButton"
import Humidity from "../components/Humidity"
import Weather from "../components/Weather"
import CalendarComp from "../components/CalendarComp"

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Waves />

      <Link href={"/data"} asChild>
        <TouchableOpacity style={styles.buttonHigh}>
          <Text style={styles.buttonHighText}>Mais informações: Clima, Histórico...</Text>
        </TouchableOpacity>
      </Link>

      <LinearGradient
        colors={["#FFFFFF", "#73C2FE", "#49A2FE" , "#FFFFFF"]}
        style={styles.buttonContainer}
      >
        <SystemButton />
        <Humidity />
        <Weather />
      </LinearGradient>

      <CalendarComp />

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
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
    justifyContent: "center",
    gap: 5,
    width: "100%"
  }
})
