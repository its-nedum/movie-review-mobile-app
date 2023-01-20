import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from '../components/pages/Home';
import Review from '../components/pages/Review';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Group>
        <Stack.Screen 
          name='Home' 
          component={Home} 
          options={{
            title: 'Movie Review', 
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: '#286972',
            }
          }}
        />
        <Stack.Screen 
          name='Review' 
          component={Review} 
          options={{
            title: 'Review details',
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: '#286972',
            }
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default NavigationStack