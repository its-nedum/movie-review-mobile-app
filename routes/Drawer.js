import { createDrawerNavigator } from "@react-navigation/drawer"
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";

const Drawer = createDrawerNavigator();

const DrawerStack = ({ isReviewDetailsPage }) => {
  
  return (
    <Drawer.Navigator initialRouteName="Home"
      screenOptions={{ 
        headerShown: isReviewDetailsPage ? false : true,
        headerTintColor: "#fff",
        headerStyle: {
              backgroundColor: '#286972',
            }
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