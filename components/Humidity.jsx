import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

function Humidity() {
  const umidade = 4

  return ( 
    <TouchableOpacity style={styles.container}>
      <Text style={styles.secondText}><Text style={styles.mainText}>{umidade}</Text>mm</Text>

      <Text style={styles.title}>Umidade do Solo</Text>
    </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#79B9FE",
    width: 120,
    height: 150,
    borderRadius: 15
  },
  mainText: {
    fontSize: 41,
    fontWeight: "bold",
    color: "#FFFFFF",
    textShadowColor: "rgba(0, 0, 0, .25)",
    textShadowOffset: "0 4",
    textShadowRadius: 18
  },
  secondText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
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

export default Humidity;