import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONTS } from '../constants/fonts'
const Button = props => {
  return (
    <TouchableOpacity
      style={{
        ...styles.btn,
        ...props.style,
      }}
      onPress={props.onPress}>
        <Text style={{
            ...FONTS.b
        }}>
            {props.text}
        </Text>
      </TouchableOpacity>
  );
};

export default Button;
