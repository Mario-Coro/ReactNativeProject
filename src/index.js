import { View, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { AlbumPlaylist, SongTracklist } from "./screens";
import { useState } from "react";
import { useFonts } from 'expo-font';
import { FONTS } from "./themes/Fonts";

export default function App() {
  const [isAlbumSelected, setIsAlbumSelected] = useState(false) 
  const [selectedAlbum, setSelectedAlbum] = useState('')

  const [loaded] = useFonts({
    [FONTS.regular]: require('../assets/fonts/RobotoCondensed-Regular.ttf'),
    [FONTS.ultra]: require('../assets/fonts/RobotoCondensed-BoldItalic.ttf'),
  });
  
  const onHandleSelectAlbum =(album)=>{
    setSelectedAlbum(album)
    setIsAlbumSelected(true)
  } 

  const onHandleGoBack=()=>{
    setIsAlbumSelected(!selectedAlbum)
    setSelectedAlbum('')
  }  

  if (!loaded) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
  <View style={styles.container}>
    { isAlbumSelected ? (<SongTracklist album={selectedAlbum} onHandleGoBack={onHandleGoBack}/>) :(<AlbumPlaylist onHandleSelectAlbum={onHandleSelectAlbum}/>)  }
  </View>
  );
}


