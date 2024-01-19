import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../constants';

const Button = ({ onPress, text, styles ,btn}) => {
  return (
    <TouchableOpacity style={{ ...styles.btn }} onPress={onPress}>
      <Text
        style={{
          ...FONTS.body2,
          fontFamily: 'medium',
          color: COLORS.white,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding2,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
});
