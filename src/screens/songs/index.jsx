import { View, FlatList, Text } from "react-native";
import SONGS from "../../constants/song.json";
import { Item } from "../../components";
import { styles } from "./style";
import { useState } from "react";
import { useSelector } from "react-redux";

export default SongsTracklist = ({ navigation, route }) => {
  const playlist = useSelector((state)=> state.playlist.data)
  const [tracklist, setTracklist] = useState(playlist);
  const { albumTitle } = route.params;
  const filterList = tracklist.filter((song) => song.album === albumTitle);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Búsquedas Recientes</Text>
      <FlatList
        data={filterList}
        contentContainerStyle={styles.songList}
        renderItem={({ item }) => <Item song={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
