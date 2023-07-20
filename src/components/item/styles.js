import { StyleSheet } from "react-native";
import { FONTS } from "../../themes/Fonts";

export const styles = StyleSheet.create({
  songContainer: {
    flexDirection: "row",
    height: 70,
    alignItems: "center",
    paddingLeft: 20,
    justifyContent: "space-between",
  },
  songTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontFamily:FONTS.ultra
  },
  songArtist: {
    color: "#B3B3B3",
    fontSize: 13,
  },
  delete: {
    fontSize: 22,
    color: "#B3B3B3",
    paddingRight: 12,
  },
  infoContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  duration: {
    color: "#B3B3B3",
  }
});
