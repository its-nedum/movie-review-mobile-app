import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import About from '../components/pages/About';

const Stack = createNativeStackNavigator();

const AboutStack = () => {
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
          name='About Page' 
          component={About} 
          // options={{ title: 'About Movie Review' }}
        />
    </Stack.Navigator>
  )
}

export default AboutStack