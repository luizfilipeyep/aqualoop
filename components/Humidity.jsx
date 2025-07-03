import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'

function Humidity() {
  const ip = "172.20.10.10" // endereço da api
  const [umidadeSolo, setUmidadeSolo] = useState([]) // guarda os valores consumidos da api

  useEffect(() => {
    // consumir api
    fetch(`http://${ip}/status`)
        .then(res => res.json())
        .then(data => {
          setUmidadeSolo(data)
          console.log(data);          
        })
  }, [])

  const umidade = umidadeSolo.umidadeSolo

  return ( 
    <View style={styles.container}>
      <Text style={styles.secondText}><Text style={styles.mainText}>{umidade}</Text>%</Text>

      <Text style={styles.title}>Umidade do Solo</Text>
    </View>
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