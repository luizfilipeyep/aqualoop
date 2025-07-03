// Botão de voltar para página inicial

import { Link } from "expo-router"
import { TouchableOpacity, StyleSheet } from "react-native"
import BackIcon from "../assets/icons/chevron-left.svg"

function BackButton() {
  return ( 
    <Link href={"/"} asChild>
      <TouchableOpacity style={styles.backButton}>
        <BackIcon />
      </TouchableOpacity>
    </Link>
   );
}

const styles = StyleSheet.create({
  backButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
  }
})

export default BackButton;