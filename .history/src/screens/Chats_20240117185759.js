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
import React, { useState } from 'react';
import {COLORS, SIZES, icons} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {messsagesData} from '..';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Chats = ({ navigation}) => {
  const [search, setSearch] = useState([])
  const renderItem = (item , index) =>{
    <TouchableOpacity
    key={index}
    style={[styles.userContainer,
      index %2 !== 0 ? styles.oddContainer : null
    ]}
    onPress={()=> navigation.navigate('Chat',{userName: item.fullName}) }>
      <View>
        {
          item.isOnline && item.isOnline === true && (
            <View style={styles.onlineIndicator}/>
          )
        }
        <Image
        source={item.userImg}
        resizeMode='contain'
        style={styles.userImage}
        />
      </View>
      <View style={{
        flexDirection:'row',
        width:SIZES.width - 104
      }}>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>
            {item.fullName}
          </Text>
          <Text style={styles.userName}>
            {item.las}
          </Text>
        </View>

      </View>
    </TouchableOpacity>
  }
  const renderContent = () => {
    return (
      <View>
        <View style={styles.searchBar}>
          <TouchableOpacity>
            <Ionicons  name='search-outline' size={24} color={COLORS.gray}/>
            </TouchableOpacity>
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
          <FlatList
            data={messsagesData}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
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
