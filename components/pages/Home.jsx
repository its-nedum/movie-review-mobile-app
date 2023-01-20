import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/global'

const Home = ({ navigation }) => {
  const [movies, setMovies] = useState([
    {id: 1, title: "Thor: Love and Thunder", rating: 2, text: "Not what I was expecting"},
    {id: 2, title: "Free Guy", rating: 5, text: "Arguably the best movie of 2021"},
    {id: 3, title: "Venom", rating: 3, text: "Well, not so bad"},
    {id: 4, title: "Black Adam", rating: 4, text: "I think I like it"},
    {id: 5, title: "Thunder Force", rating: 1, text: "It's funny sha"}
  ])
  return (
    <View style={globalStyles.container}>
        <FlatList 
          data={movies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Review", item)}>
                <Text style={globalStyles.titleText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
    </View>
  )
}

export default Home
