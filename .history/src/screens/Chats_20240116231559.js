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
    backgroundColor: COLORS.Se,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondaryWhite,
    padding: 16,
  },
})