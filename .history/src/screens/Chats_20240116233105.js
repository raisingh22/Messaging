import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';

const Chats = () => {
  const renderContent = () => {
    return (
      <View>
        <View style={styles.searchBar}>
          <TouchableOpacity>{/* <Ionicons /> */}</TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search contacts..."
          />
          <TouchableOpacity>
            <Image
              source={icons.editPencil}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: COLORS.gray,
              }}
            />
          </TouchableOpacity>
        </View> 
        <View>
          <FlatList/>
        </View>
        
        
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    width: SIZES.width - 32,
    height: 50,
    marginVertical: 22,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    marginHorizontal: 12,
    backgroundColor: COLORS.white,
  },
});
