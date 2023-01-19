import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { globalStyles } from '../../styles/global'

const Home = ({ onLayoutRootView }) => {
  return (
    <View style={globalStyles.container} onLayout={onLayoutRootView}>
        <Text style={globalStyles.titleText}>Home Page</Text>
    </View>
  )
}

export default Home
