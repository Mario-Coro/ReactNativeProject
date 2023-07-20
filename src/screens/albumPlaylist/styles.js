import { StyleSheet, StatusBar } from "react-native";
import { FONTS } from "../../themes/Fonts";
export const styles = StyleSheet.create({
  container: {
    margin:10,
    
  },
  title: {
    fontSize: 30,
    color: '#FFFFFF',
    fontFamily:FONTS.regular
  },
  listContainer:{
    margin:20,
    gap:30,
    paddingBottom:80,
    alignContent:'center',
    justifyContent:"center"

  }
});
