import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'

const Welcome = () => {
  return (
   <SafeAreaView>
    <StatusBar hidden/>
    <View style={styles.container}>
      <Image/
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
  }
})