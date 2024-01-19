import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'

const Welcome = () => {
  return (
   <SafeAreaView>
    <StatusBar hidden/>
   </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
  area:{
    flex:1,
    backgroundColor:COLORS.white
  }
})