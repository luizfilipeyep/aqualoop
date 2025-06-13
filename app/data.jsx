import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BackIcon from "../assets/icons/chevron-left.svg"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link } from "expo-router"


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
    width: "90%"
  },
  backButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#FFFFFF"
  }
})

export default Data;