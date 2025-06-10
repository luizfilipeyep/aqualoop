import { StyleSheet, Text, View } from 'react-native';

import Vector1 from "../assets/waves.svg"

function Waves() {
  return ( 
    <View style={styles.container}>
      <Vector1 width="100%" />
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 225,
    borderRadius: 25,
    marginTop: 14,
    backgroundColor: "#D9D9D9",
  },
});

export default Waves;