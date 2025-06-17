import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import axios from 'axios'
import { useState } from 'react'

function SystemButton() {
  const [systemStatus, setSystemStatus] = useState("desligado")
  const [buttonStyle, setButtonStyle] = useState(styles.container)
  const [buttonStyleText, setButtonStyleText] = useState(styles.title)
  const url = "172.20.10.10"

  const handleClickSystem = () => {
    var msg = null

    if (systemStatus == "desligado") {
      axios.put(`http://${url}/bomba1`, {
        acao: true
      })

      setSystemStatus("ligado")
      setButtonStyle(styles.containerActive)
      setButtonStyleText(styles.titleActive)
      msg = "A bomba 1 foi ligada"
    } 
    else if (systemStatus == "ligado") {
      axios.put(`http://${url}/bomba1`, {
        acao: false
      })

      setSystemStatus("desligado")
      setButtonStyle(styles.container)
      setButtonStyleText(styles.title)
      msg = "A bomba 1 foi desligada"
    }

    console.log(msg)    
  }

  return ( 
    <Pressable style={buttonStyle} onPress={handleClickSystem}>
      <Text style={buttonStyleText}>Sistema de Irrigação</Text>
    </Pressable>
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
  title: {
    position: "absolute",
    bottom: 10,
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12,
    textShadowColor: "rgba(0, 0, 0, .25)",
    textShadowOffset: "0 4",
    textShadowRadius: 18
  },
  containerActive: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8ECAB4",
    width: 120,
    height: 150,
    borderRadius: 15
  },
  titleActive: {
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