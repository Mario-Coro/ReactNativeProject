import { View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { FONTS } from "./themes/Fonts";
import RootNavigator from "./navigations";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  const [loaded] = useFonts({
    [FONTS.regular]: require("../assets/fonts/RobotoCondensed-Regular.ttf"),
    [FONTS.ultra]: require("../assets/fonts/RobotoCondensed-BoldItalic.ttf"),
  });

  if (!loaded) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return( 
    <Provider store={store}>
       <RootNavigator />
    </Provider>)
}

