import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '../constants'

const Intro = () => {
  return (
    <ImageBackground 
    source={images.background}
    style={{flex: 1}}
    >
<StatusBar hidden />
<View style={{
    flex:1,
    padding:16,marginTop:22
}}>
    <View>
        
    </View>

</View>
    </ImageBackground>
  )
}

export default Intro

const styles = StyleSheet.create({})