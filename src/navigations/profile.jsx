import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "../screens";
const Stack = createNativeStackNavigator()

export default ProfileNavigator =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
    )
}