import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import axios from 'axios'
import { useState } from 'react'
import GotaIcon from "../assets/gota.svg"


function SystemButton() {
  const [systemStatus, setSystemStatus] = useState("desligado") // estado que define se o sistema está ligado ou desligado, inicialmente ele está desligado
  const [buttonStyle, setButtonStyle] = useState(styles.container)
  const [buttonStyleText, setButtonStyleText] = useState(styles.title)
  const ip = "172.20.10.10" // endereço da api

  const handleClickSystem = () => {
    var msg = null // mensagem de retorno

    // ligar e desligar sistema
    if (systemStatus == "desligado") {
      fetch(`http://${ip}/bomba1`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `acao=1`
      })
      .then(response => console.log(response))
      .catch(err => console.log("Erro ao enviar comando"))

      setSystemStatus("ligado")
      setButtonStyle(styles.containerActive)
      setButtonStyleText(styles.titleActive)
      msg = "A bomba 1 foi ligada"
    } 
    else if (systemStatus == "ligado") {
      axios
        fetch(`http://${ip}/bomba1`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `acao=0`
      })
      .then(response => console.log(response)
      )
      .catch(err => console.log("Erro ao enviar comando"))

      setSystemStatus("desligado")
      setButtonStyle(styles.container)
      setButtonStyleText(styles.title)
      msg = "A bomba 1 foi desligada"
    }

    console.log(msg)    
  }

  return ( 
    <Pressable style={buttonStyle} onPress={handleClickSystem}>
      <GotaIcon style={styles.icon} />
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