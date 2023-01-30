import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import NavigationStack from "./routes/Drawer";
import { useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const navigationRef = useNavigationContainerRef();
  const [isReviewDetailsPage, setIsReviewDetailsPage] = useState(false)

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
        <NavigationContainer 
          ref={navigationRef}
          onReady={onLayoutRootView}
          onStateChange={async () => {
            const currentRouteName = navigationRef.getCurrentRoute().name;
            if(currentRouteName === 'Review Details'){
              setIsReviewDetailsPage(true)
            }else{
              setIsReviewDetailsPage(false)
            }
          }}  
        >
          <NavigationStack isReviewDetailsPage={isReviewDetailsPage}/>
        </NavigationContainer>
         
      );
}
