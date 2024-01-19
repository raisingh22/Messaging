import {StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';

const Chats = () => {
  const renderContent = () => {
    return (
      <View style={styles.searchBar}>
        <TouchableOpacity>
          {/* <Ionicons /> */}
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.area}>
      <StatusBar hidden />
      <View style={styles.container}>{renderContent()}</View>
    </SafeAreaView>
  );
};

export default Chats;

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: COLORS.secondaryWhite,
    padding: 16,
  },
  searchBar:{
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor:COLORS.white,
    width: SIZES
  }
});
