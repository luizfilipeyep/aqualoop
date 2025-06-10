import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

function SystemButton() {
  return ( 
    <TouchableOpacity style={styles.container}>

    </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#8ECAB4",
    width: 120,
    height: 150,
    borderRadius: 15
  }
})

export default SystemButton;