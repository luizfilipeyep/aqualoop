// Página de dados

// Import de bibliotecas
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link } from "expo-router"

// Import de components
import Chart from "../components/Chart"
import CalendarComp from "../components/CalendarComp"
import Weather from "../components/Weather"
import Forecast from "../components/Forecast"
import BackButton from "../components/BackButton"


function Data() {
  return ( 
    <SafeAreaView style={styles.container}>
      <View style={styles.backButtonSection}>
        <BackButton />
      </View>

      <Chart />

      <View style={styles.weatherContainer}>
        <Weather />
      </View>

      <CalendarComp />
      <StatusBar style={{backgroundColor: "#D5E9F4"}} />      
    </SafeAreaView> 
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D5E9F4",
    alignItems: "center",
  },
  backButtonSection: {
    width: "100%",
    marginTop: 0,
    marginLeft: 0
  },
  weatherContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10
  }
})

export default Data;