import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./routes/NavigationStack";

SplashScreen.preventAutoHideAsync();

export default function App() {
  // load custom fonts
  const [fontsLoaded] = useFonts({
    'nunito-regular': require("./assets/fonts/Nunito-Regular.ttf"),
    'nunito-bold': require("./assets/fonts/Nunito-Bold.ttf")
  });

  // setup layout to handle display of splash screen until fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded){
      await SplashScreen.hideAsync()
    }
  },[fontsLoaded]);

  if(!fontsLoaded) return null

  return (
        <NavigationContainer onReady={onLayoutRootView}>
          <NavigationStack />
        </NavigationContainer>
         
      );
}
