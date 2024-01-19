import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, images} from '../constants';

const Intro = () => {
  return (
    <ImageBackground source={images.background} style={{flex: 1}}>
      <StatusBar hidden />
      <View
        style={{
          flex: 3,
          padding: 16,
          marginTop: 22,
        }}>
      </View>
      <View style={styles.bottomContainer}>
        <Text>
            Enjoy the new experiences of chating with global friends
        </Text>
        <Text>
            Connect people around the world
        </Text>
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
  bottomTitle:{

  },
  
});
