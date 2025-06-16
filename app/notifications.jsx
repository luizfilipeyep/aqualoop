import { View, Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import BackButton from "../components/BackButton";

function Notifications() {
  return ( 
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <BackButton />
        <Text style={styles.title}>Notificações</Text>
      </View>
    </SafeAreaView>
   );
}

const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  }
})

export default Notifications;