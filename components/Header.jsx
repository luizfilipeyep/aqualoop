import { StyleSheet, Text, View } from 'react-native';

import Bell from "../assets/icons/bell.svg"
import Waves from "../assets/waves.svg"

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImg}></View>
          <Text style={styles.headerText}>Bom dia, {"\n"}<Text style={styles.headerTextSpan}>Luiz</Text></Text>
        </View>
        <View>
          <Bell width={35} height={35} fill="#D9D9D9" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 25
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 14

  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#D9D9D9",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8C8C8C"
  },
  headerTextSpan: {
    color: "#000"
  }
});
