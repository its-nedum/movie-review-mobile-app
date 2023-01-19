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
          options={{title: 'Home'}}
        />
        <Stack.Screen 
          name='Review' 
          component={Review} 
          options={{title: 'Review details'}}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default NavigationStack