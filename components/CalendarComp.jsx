import { StyleSheet } from "react-native"
import { Calendar, LocaleConfig } from "react-native-calendars"
import { ptBR } from "../utils/localeCalendarConfig"
import { View } from "react-native"

LocaleConfig.locales["pt-br"] = ptBR
LocaleConfig.defaultLocale = "pt-br"

function CalendarComp() {
  return ( 
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        theme={{
          todayBackgroundColor: "#FF9E9E",
          todayTextColor: "#FFFFFF"
        }}
      />
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  calendar: {
    width: 400,
    marginTop: 10,
    borderRadius: 10
  }
})

export default CalendarComp;