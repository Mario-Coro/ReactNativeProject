import { View, FlatList, Text  } from "react-native";
import ALBUMS from '../../constants/categories.json'
import {AlbumItem} from "../../components";
import { useState } from "react";
import { styles } from "./styles";


export default AlbumPlaylist =({onHandleSelectAlbum})=>{
const [albumList, setAlbumList] = useState(ALBUMS)

    return(
        <View style={styles.container}>
        <Text style={styles.title}>Trending Albums</Text>
        <FlatList
        data={albumList}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => <AlbumItem onHandleSelectAlbum={()=>onHandleSelectAlbum(item.albumName)}  album={item}/>}
        keyExtractor={(item)=> item.id}
        /> 
      </View>
    )
}