import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import { globalStyles, images } from '../../styles/global'
import Card from '../shared/Card';

const Review = ({ route }) => {
  const single = route.params;
  return (
    <ImageBackground source={images.background.page} style={globalStyles.container}>
      <Card>
        <Text>{single.title}</Text>
        <Text>{single.text}</Text>
        <View style={styles.rating}>
          <Text>Movie rating: </Text>
          <Image source={images.ratings[single.rating]} />
        </View>
      </Card>
    </ImageBackground>
  )
}

export default Review

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee"
  }
})