import { View, FlatList, Text, ActivityIndicator } from "react-native";
import { AlbumItem } from "../../components";
import { styles } from "./styles";
import { useGetAlbumsQuery } from "../../store/albums/api";

export default AlbumPlaylist = ({ navigation, route }) => {
  const { data, error, isLoading } = useGetAlbumsQuery();
  const onSelectAlbum = (albumTitle) => {
    navigation.navigate("Tracklist", { albumTitle });
  };

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending Albums</Text>
      <View style={styles.albumContainer}>
        <FlatList
          data={data}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <AlbumItem onHandleSelectAlbum={() => onSelectAlbum(item.albumName)} album={item} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
