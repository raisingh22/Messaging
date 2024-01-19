import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = (props,) => {
  return (
   <TouchableOpacity 
   style={{
    ...styles.btn,
    ...props.style
   }}
   onPress={props.on}
   >

   </TouchableOpacity>
  )
}

export default Button