import {Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons, images} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import SocialButton from '../components/SocialButton';
import { FONTS } from '../constants/fonts';

const Welcome = () => {
  return (
    <SafeAreaView style={styles.area}>
      <StatusBar hidden />
      <View style={styles.container}>
        <Image source={images.logo} resizeMode="contain" style={styles.logo} />
        <Text style={styles.title}>Welcome Back !</Text>
        <Text style={styles.subtitle}>
          Hello there ! Continue with and listen the stories from around the
          world
        </Text>
        <View style={{
          marginVertical:32
        }}>
          <SocialButton icon={icons.appleLogo} title={'Continue with Apple'}/>
          <SocialButton icon={icons.google} title={'Continue with Google'}/>
          <SocialButton icon={icons.email} title={'Continue with Email'}/>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.login}>
            Already have an account ?
          </Text>
          <TouchableOpacity>
            <Text style={styles.loginSubtitle}>{'  '}Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomTitle}>By continuing, you agree to the terms to use </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    padding: 16,
  },
  logo: {
    width: 72,
    height: 72,
    marginBottom: 22,
    marginTop: -22,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.black,
    marginVertical: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 12,
    fontStyle: 'normal',
    color: COLORS.black,
    marginVertical: 12,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  login:{
    fontSize:14,
    color: COLORS.black,
    fontWeight:'800'

  },
  loginSubtitle:{
    fontSize:14,
    color: COLORS.primary,
    // textDecorationLine:'underline',
fontWeight:'800'
  },
  bottomContainer:{
position:'absolute',
bottom:32,
right:0,
left:0,
width:SIZES.width - 32,
alignItems:'center'
  },
  bottomTitle:{
fontSize:12,
fontFamily:FONTS.regular,
color: COLORS.
  }
});
