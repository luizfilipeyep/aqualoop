import { View } from "react-native"
import { StyleSheet } from "react-native"
import axios from "axios"
import { useEffect, useState, useLayoutEffect } from "react"

function Forecast() {
  const api_key = "2021d0c45ff5a1fe186364cf0b804166"
  const city_id = 3390760
  const api_url = `https://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${api_key}&units=metric&lang=pt_br`
  const [weather, setWeather] = useState([])
  

  return ( 
    <View style={styles.container}>
      
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 150,
    borderRadius: 15,
    backgroundColor: "white"
  }
})

export default Forecast;