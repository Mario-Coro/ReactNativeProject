import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MusicPlayerNavigator from './musicPlayer'
import FavoritesNavigator from './favorites'

const BottomTab = createBottomTabNavigator()

export default TabsNavigator =()=>{
    return(
        <BottomTab.Navigator initialRouteName="MusicTab" screenOptions={{
            headerShown:false,
            tabBarActiveTintColor:'black',
            tabBarInactiveTintColor:'lightgray'
            }}>
            <BottomTab.Screen name="MusicTab" component={MusicPlayerNavigator} options={{
                tabBarLabel: 'Playlists', tabBarIcon:({focused, color, size})=>{ <Ionicons name={ focused ? 'musical-notes' : 'musical-notes-outline'} size={24} color="black" />}
            }}/>
            <BottomTab.Screen name="FavoriteTab" component={FavoritesNavigator}/>
        </BottomTab.Navigator>
    )
}