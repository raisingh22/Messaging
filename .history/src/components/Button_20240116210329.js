import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = () => {
  return (
   <TouchableOpacity 
   style={{
    ...styles.btn,
    ...props.style
   }}
   onPress={onPress}
   >

   </TouchableOpacity>
  )
}

export default Button