import { StyleSheet, Text, View, Image } from 'react-native'

function Waves() {
  return ( 
    <View style={styles.container}>
      <Image
        source={require("../assets/Waves.png")}
        style={{width: "100%",height: "100%"}}
      />
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 151,
    borderRadius: 25,
    marginTop: 14,
    backgroundColor: "#D9D9D9",
    overflow: "hidden"
  },
});

export default Waves;