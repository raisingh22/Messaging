import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SIZES } from '../constants'

const SocialButton = ({title , icon ,onPress}) => {
  return (
    <TouchableOpacity 
    style={styles.container}
    onPress={onPress}>

    </TouchableOpacity>
  )
}

export default SocialButton

const styles = StyleSheet.create({
    container:{
        width:SIZES.width -32 ,
        height

    }
})