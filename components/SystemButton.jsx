import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

function SystemButton() {
  return ( 
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>Clima</Text>
    </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8ECAB4",
    width: 120,
    height: 150,
    borderRadius: 15
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

export default SystemButton;