import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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
    backgroundColor: COLORS.white,
    padding: 16,
  },
})