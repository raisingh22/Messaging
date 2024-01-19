import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '../constants'

const Intro = () => {
  return (
    <ImageBackground 
    source={images.background}
    style={{flex: 1}}
    >
<StatusBar translucent />
    </ImageBackground>
  )
}

export default Intro

const styles = StyleSheet.create({})