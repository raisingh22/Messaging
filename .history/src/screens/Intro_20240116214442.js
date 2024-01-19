import {Image, ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, images} from '../constants';
import Button from '../components/Button';

const Intro = () => {
  const handleButtonPress = () => {
    // Your button press logic here
    console.log('Button Pressed');
  };
  return (
    <ImageBackground source={images.background} style={{flex: 1}}>
      <StatusBar hidden />
      <View
        style={{
          flex: 3,
          padding: 16,
          marginTop: 22,
        }}>
        <View style={styles.circleViewContainer}>
          <View
            style={[
              styles.circleView,
              {
                borderBottomStartRadius: 0,
                backgroundColor: COLORS.secondary,
              },
            ]}>
                <Image
                source={images.girl1}
                resizeMode='cover'
                style={{
                    width: (SIZES.width - 32)/2 -5,
                    height: (SIZES.width - 32)/2-26,
                    bottom:0
                }}
                />
            </View>
          <View style={[styles.circleView]}
          ></View>
        </View>
        <View style={styles.circleViewContainer}>
          <View style={[styles.circleView]}></View>
          <View
            style={[
              styles.circleView,
              {
                borderBottomEndRadius: 0,
                backgroundColor: COLORS.secondary,
              },
            ]}></View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomTitle}>
          Enjoy the new experiences of chating with global friends
        </Text>
        <Text style={styles.bottomSubTitle}>
          Connect people around the world for free
        </Text>
        <Button
          onPress={handleButtonPress}
          text="Get Started"
          //   style={{marginVertical:  20,
          // }}
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
  circleViewContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 32,
  },
  circleView: {
    width: '45%', // Adjust the width as needed
    aspectRatio: 1, // To maintain a square shape
    borderRadius: 45 * 2,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
