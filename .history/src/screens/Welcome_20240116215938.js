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
        WelCome Back !
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
    
  }
})