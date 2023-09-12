import { View, FlatList, Text, ActivityIndicator } from "react-native";
import { Item } from "../../components";
import { styles } from "./style";
import { useGetSongsQuery } from "../../store/playlist/api";

export default SongsTracklist = ({ navigation, route }) => {
  const { albumTitle } = route.params;
  const { data, error, isLoading } = useGetSongsQuery(albumTitle);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Búsquedas Recientes</Text>
      <FlatList
        data={data}
        contentContainerStyle={styles.songList}
        renderItem={({ item }) => <Item song={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
