import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Favorites } from "../screens";
const Stack = createNativeStackNavigator()

export default FavoritesNavigator =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Favorites" component={Favorites}/>
        </Stack.Navigator>
    )
}