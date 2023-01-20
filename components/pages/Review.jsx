import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { globalStyles } from '../../styles/global'

const Review = ({ navigation, route }) => {
  const single = route.params;
  return (
    <View style={globalStyles.container}>
        <Text>{single.title}</Text>
        <Text>{single.text}</Text>
        <Text>{single.rating}</Text>
    </View>
  )
}

export default Review
