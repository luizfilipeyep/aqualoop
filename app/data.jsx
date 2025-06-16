import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BackIcon from "../assets/icons/chevron-left.svg"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link } from "expo-router"

import Chart from "../components/Chart"
import CalendarComp from "../components/CalendarComp"
import Weather from "../components/Weather"


function Data() {
  return ( 
    <SafeAreaView style={styles.container}>
      <View style={styles.backButtonSection}>
        <Link href={"/"} asChild>
          <TouchableOpacity style={styles.backButton}>
            <BackIcon />
          </TouchableOpacity>
        </Link>
      </View>

      <Chart />

      <View>
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
  backButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25
  }
})

export default Data;