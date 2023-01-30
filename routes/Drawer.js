import { createDrawerNavigator } from "@react-navigation/drawer"
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import { StyleSheet, View, Image } from "react-native";

const Drawer = createDrawerNavigator();

const DrawerStack = ({ isReviewDetailsPage }) => {
  
  return (
    <Drawer.Navigator initialRouteName="Home"
      screenOptions={{ 
        headerShown: isReviewDetailsPage ? false : true,
        headerTintColor: "#fff",
        headerStyle: {
              backgroundColor: '#286972',
            },
        headerRight: () => (
          <View>
            <Image style={styles.headerImage} source={require("../assets/heart_logo.png")}/>
          </View>
        )
        }}
        
    >
        <Drawer.Screen 
            name="Home"
            component={HomeStack}
        />
        <Drawer.Screen 
            name="About"
            component={AboutStack}
        />
    </Drawer.Navigator>
  )
}

export default DrawerStack

const styles = StyleSheet.create({
  headerImage: {
    width: 26,
    height: 26,
    marginRight: 10
  }
})