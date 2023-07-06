import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#121212',
  },
  title:{
    color: '#FFFFFF',
    fontSize:20,
    marginTop:10,
    marginLeft:20
  },
  songList:{
    gap:12,
    marginTop:10,
    paddingBottom:30
  }
});
