import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AlbumPlaylist, SongTracklist } from "../screens";
const Stack = createNativeStackNavigator();

export default MusicPlayerNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="AlbumPlaylist">
      <Stack.Screen name="Albums" component={AlbumPlaylist} />
      <Stack.Screen name="Tracklist" component={SongTracklist} />
    </Stack.Navigator>
  );
};
