import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, images} from '../constants';
import Button from '../components/Button';

const Intro = () => {
  return (
    <ImageBackground source={images.background} style={{flex: 1}}>
      <StatusBar hidden />
      <View
        style={{
          flex: 3,
          padding: 16,
          marginTop: 22,
        }}></View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomTitle}>
          Enjoy the new experiences of chating with global friends
        </Text>
        <Text style={styles.bottomSubTitle}>
          Connect people around the world for free
        </Text>
        <Button
          title="Get Started"
          onPress={() => {
            console.log('Connect');
          }}
          style={{
            marginVertical: 24,
            width: SIZES.width,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 16,
          }}>
          <Text
            style={{
              fontSize: 12,
              color: 'gray',
              fontFamily: 'medium',
            }}>
            Powered By{' '}
          </Text>
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.secondary,
              fontFamily: 'semiBold',
            }}>
            Usage
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Intro;

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 2,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    alignItems: 'center',
    padding: 16,
  },
  bottomTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
    textAlign: 'center',
    margin: 16,
  },
  bottomSubTitle: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
    margin: 16,
  },
});
