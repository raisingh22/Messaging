import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const Chats = () => {
  return (
    <View>
      <Text>Chats</Text>
    </View>
  )
}

export default Chats

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.d,
    padding: 16,
  },
})