import React, { useState } from 'react'
import { Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import { globalStyles, images } from '../../styles/global'
import Card from '../shared/Card'

const Home = ({ navigation }) => {
  const [movies, setMovies] = useState([
    {id: 1, title: "Thor: Love and Thunder", rating: 2, text: "Not what I was expecting"},
    {id: 2, title: "Free Guy", rating: 5, text: "Arguably the best movie of 2021"},
    {id: 3, title: "Venom", rating: 3, text: "Well, not so bad"},
    {id: 4, title: "Black Adam", rating: 4, text: "I think I like it"},
    {id: 5, title: "Thunder Force", rating: 1, text: "It's funny sha"}
  ])
  return (
    <ImageBackground source={images.background.page} style={globalStyles.container}>
        <FlatList 
          data={movies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Review Details", item)}>
              <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
    </ImageBackground>
  )
}

export default Home
