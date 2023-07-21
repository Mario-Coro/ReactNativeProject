import { StyleSheet, StatusBar } from "react-native";
import { FONTS } from "../../themes/Fonts";
export const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#121212",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
    fontFamily: FONTS.ultra,
  },
  songList: {
    gap: 12,
    marginTop: 10,
    paddingBottom: 30,
  },
});
