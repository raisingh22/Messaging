import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'

const Chats = () => {
  return (
    <SafeAreaView s>

    </SafeAreaView>
  )
}

export default Chats

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: COLORS.secondaryWhite,
    padding: 16,
  },
})