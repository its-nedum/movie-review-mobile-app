import React from 'react'
import { ImageBackground, View, Text } from 'react-native'
import { globalStyles, images } from '../../styles/global'

const About = () => {
  return (
    <ImageBackground source={images.background.page} style={globalStyles.container}>
        <Text>About Us</Text>
    </ImageBackground>
  )
}

export default About
