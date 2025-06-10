import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'

import Bell from "../assets/icons/bell.svg"

export default function Header() {

  const saudacaoPorhora = () => {
    const hora = new Date().getHours()

    if (hora >= 5 && hora < 12) {
      return "Bom dia";
    } else if (hora >= 12 && hora < 18) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImg}></View>
          <Text style={styles.headerText}>{saudacaoPorhora()}, {"\n"}<Text style={styles.headerTextSpan}>Luiz</Text></Text>
        </View>
        <View>
          <Bell width={33} height={33} fill="#D9D9D9" />
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
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: "#D9D9D9",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#8C8C8C"
  },
  headerTextSpan: {
    color: "#000"
  }
});
