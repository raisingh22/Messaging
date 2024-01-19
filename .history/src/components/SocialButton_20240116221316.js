import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icons, SIZES, icons } from '../constants'

const SocialButton = ({title , icon ,onPress}) => {
  return (
    <TouchableOpacity 
    style={styles.container}
    onPress={onPress}>
<Image 
source={icon}/>
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
    },
    icons:{
        height:24,width:24,marginRight:32

    },
    titl
})