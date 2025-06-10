import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

function Weather() {
  return ( 
    <TouchableOpacity style={styles.container}>
      
    </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#FF9E9E",
    width: 120,
    height: 150,
    borderRadius: 15
  }
})

export default Weather;