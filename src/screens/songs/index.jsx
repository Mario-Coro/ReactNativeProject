import { View, FlatList, Text, Button } from "react-native";
import SONGS from '../../constants/song.json';
import { Item } from "../../components";
import { styles } from "./style";
import { useState } from "react";

export default SongsTracklist =({album, onHandleGoBack})=>{
    const [tracklist, setTracklist] = useState(SONGS) 
    const filterList = tracklist.filter((song)=> song.album === album)

    return(
    <View style={styles.container}>
        <Text style={styles.title}>Búsquedas Recientes</Text>
        <Button
        onPress={onHandleGoBack}
        title="Go back"
        />
        <FlatList
        data={filterList}
        contentContainerStyle={styles.songList}
        renderItem={({ item }) => <Item song={item}/>}
        keyExtractor={(item)=> item.id}
        />
      </View> )
}