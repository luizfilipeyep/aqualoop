import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

function Humidity() {
  return ( 
    <TouchableOpacity style={styles.container}>

    </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#79B9FE",
    width: 120,
    height: 150,
    borderRadius: 15
  }
})

export default Humidity;