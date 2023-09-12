import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "../screens/Auth";

const Stack = createNativeStackNavigator();

export default AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
};
