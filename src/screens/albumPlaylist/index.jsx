import { View, FlatList, Text } from "react-native";
import ALBUMS from "../../constants/categories.json";
import { AlbumItem } from "../../components";
import { useState } from "react";
import { styles } from "./styles";

export default AlbumPlaylist = ({ navigation }) => {
  const [albumList, setAlbumList] = useState(ALBUMS);
  const onSelectAlbum = (albumTitle) => {
    navigation.navigate("Tracklist", { albumTitle });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending Albums</Text>
      <FlatList
        data={albumList}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <AlbumItem onHandleSelectAlbum={() => onSelectAlbum(item.albumName)} album={item} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
