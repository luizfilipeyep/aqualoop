import { StyleSheet, Text, View } from 'react-native'

import CloudIcon from "../assets/cloud.svg"

function Weather() {
  const temperature = 24

  return ( 
    <View style={styles.container}>
      <Text style={styles.mainText}>{temperature}º</Text>
      <CloudIcon style={styles.icon} />
      <Text style={styles.title}>Clima</Text>
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF9E9E",
    width: 120,
    height: 150,
    borderRadius: 15
  },
  mainText: {
    fontSize: 41,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginLeft: 12,
    textShadowColor: "rgba(0, 0, 0, .25)",
    textShadowOffset: "0 4",
    textShadowRadius: 18
  },
  title: {
    position: "absolute",
    bottom: 10,
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12,
    textShadowColor: "rgba(0, 0, 0, .25)",
    textShadowOffset: "0 4",
    textShadowRadius: 18
  }
})

export default Weather;