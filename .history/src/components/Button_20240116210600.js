import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONTS } from '../constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const Button = props => {
  return (
    <TouchableOpacity
      style={{
        ...styles.btn,
        ...props.style,
      }}
      onPress={props.onPress}>
        <Text style={{
            ...FONTS.body2,
            fontFamily:'medium',
            color: Colors.

        }}>
            {props.text}
        </Text>
      </TouchableOpacity>
  );
};

export default Button;
