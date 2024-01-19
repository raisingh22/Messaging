import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, images } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'

const Welcome = () => {
  return (
   <SafeAreaView style={styles.area}>
    <StatusBar hidden/>
    <View style={styles.container}>
      <Image
      source={images.logo}
      resizeMode='contain'
      style={
        styles.logo
      }
      />
      <Text style={styles.title}>
        Welcome Back !
      </Text>
      <Text style={styles.subtitle}>
        Hello there ! Continue with and listen the stories from around the world
      </Text>
    </View>
   </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
  area:{
    flex:1,
    backgroundColor:COLORS.white
  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:COLORS.white,
    padding:16
  },
  logo:{
    width:72,
    height:72,
    marginBottom:22,
    marginTop:-22
  },
  title:{
    fontSize : 28,
    fontWeight:'bold',
    color: COLORS.black,
    marginVertical:12,
    textAlign: 'center',
  },
  subtitle:{
    fontSize : 12,
    fontStyle:'normal',
    color: COLORS.black,
    marginVertical:12,
    textAlign: 'center',
    paddingHorizontal:1
  }
})