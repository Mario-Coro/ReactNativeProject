import { View } from "react-native";
import { styles } from "./styles";
import { AlbumPlaylist, SongTracklist } from "./screens";
import { useState } from "react";

export default function App() {
  const [isAlbumSelected, setIsAlbumSelected] = useState(false) 
  const [selectedAlbum, setSelectedAlbum] = useState('')
  
  const onHandleSelectAlbum =(album)=>{
    setSelectedAlbum(album)
    setIsAlbumSelected(true)
  } 

  const onHandleGoBack=()=>{
    setIsAlbumSelected(!selectedAlbum)
    setSelectedAlbum('')
  }  

  return (
  <View style={styles.container}>
    { isAlbumSelected ? (<SongTracklist album={selectedAlbum} onHandleGoBack={onHandleGoBack}/>) :(<AlbumPlaylist onHandleSelectAlbum={onHandleSelectAlbum}/>)  }
  </View>
  );
}


