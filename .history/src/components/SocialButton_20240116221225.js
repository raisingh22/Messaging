import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icons, SIZES } from '../constants'

const SocialButton = ({title , icon ,onPress}) => {
  return (
    <TouchableOpacity 
    style={styles.container}
    onPress={onPress}>
<Icons name={icon}/>
<Image 
source={}/>
    </TouchableOpacity>
  )
}

export default SocialButton

const styles = StyleSheet.create({
    container:{
        width:SIZES.width -32 ,
        height:54,
        alignItems: 'center',
        paddingHorizontal:22,
        borderRadius:16,
        borderColor:'gray',
        borderWidth:1,
        flexDirection:'row',
        marginTop:12

    }
})