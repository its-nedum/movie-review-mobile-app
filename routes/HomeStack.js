import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from '../components/pages/Home';
import Review from '../components/pages/Review';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerShown: false,
        headerTintColor: "#fff",
        headerStyle: {
              backgroundColor: '#286972',
            }
        }}>
        <Stack.Screen 
          name='Movie Home' 
          component={Home} 
          // options={{ title: 'Movie Review' }}
        />
        <Stack.Screen 
          name='Review Details' 
          component={Review}
          options={{
            headerShown: true,
            title: 'Review details'
          }}
          // options={{ title: 'Review details' }}
        />
    </Stack.Navigator>
  )
}

export default HomeStack