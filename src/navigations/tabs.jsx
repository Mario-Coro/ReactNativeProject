import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MusicPlayerNavigator from './musicPlayer'
import ProfileNavigator from './profile'

const BottomTab = createBottomTabNavigator()

export default TabsNavigator =()=>{
    return(
        <BottomTab.Navigator initialRouteName="MusicTab" screenOptions={{
            headerShown:false,
            tabBarActiveTintColor:'black',
            tabBarInactiveTintColor:'lightgray'
            }}>
            <BottomTab.Screen name="MusicTab" component={MusicPlayerNavigator} options={{
                tabBarLabel: 'Playlists', tabBarIcon:({focused})=>{ <Ionicons name={ focused ? 'musical-notes' : 'musical-notes-outline'}/>}
            }}/>
            <BottomTab.Screen name="ProfileTab" component={ProfileNavigator}/>
        </BottomTab.Navigator>
    )
}