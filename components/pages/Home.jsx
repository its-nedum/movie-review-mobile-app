import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { globalStyles } from '../../styles/global'

const Home = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Home Page</Text>
        <Button title='next page' onPress={() => navigation.navigate('Review')}/>
    </View>
  )
}

export default Home
