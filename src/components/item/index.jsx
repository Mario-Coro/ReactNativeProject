import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export default Item = ({ song }) => {
  return (
    <View style={styles.songContainer}>
      <View style={styles.infoContainer}>
        <Image source={{ uri: song.coverImg }} style={{ width: 50, height: 50 }} />
        <View>
          <Text style={styles.songTitle}>{song.title}</Text>
          <Text style={styles.songArtist}>{song.artist}</Text>
        </View>
      </View>
      <View style={styles.details}>
        <Text style={styles.duration}>{song.duration}</Text>
        <Text style={styles.delete}>✕</Text>
      </View>
    </View>
  );
};
