import { View, FlatList, Text, SafeAreaView } from "react-native";
import SONGS from './data/song.json'
import { styles } from "./styles";
import { Item } from './components'
import { useState } from "react";

export default function App() {
  const [tracklist, setTracklist] = useState(SONGS)

  const deleteSong =(id)=>{
    setTracklist((prevTracklist)=>prevTracklist.filter((track)=> track.id !== id))
  }

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Búsquedas Recientes</Text>
        <FlatList
        data={tracklist}
        contentContainerStyle={styles.songList}
        renderItem={({ item }) => <Item song={item} onHandlerDelete={deleteSong} />}
        keyExtractor={(item)=> item.id}
        />
      </View>
  );
}

