import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

export default AlbumItem =({onHandleSelectAlbum, album})=>{
    return(
        <TouchableOpacity onPress={()=>onHandleSelectAlbum(album.albumName)} style={styles.albumContainer}>
            <View style={styles.imgContainer}>
            <Image style={styles.image} source={{uri:album.albumImage}}/>
            </View>
            <View>
            <Text style={styles.name}>{album.albumName}</Text>  
            <Text style={styles.artist}>{album.artistName}</Text>
            </View>
        </TouchableOpacity>
    )
}