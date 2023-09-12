import { StyleSheet, StatusBar } from "react-native";
import { FONTS } from "../../themes/Fonts";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    flex:1,
    alignItems:'center'
  },
  title: {
    fontSize: 30,
    color: "#FFFFFF",
    fontFamily: FONTS.regular,
  },
  albumContainer:{
    justifyContent:'center'
  },
  listContainer: {
    margin: 20,
    gap: 30,
    paddingBottom: 80,
    
  }
});
