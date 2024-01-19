import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES, icons} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {messsagesData} from '../data';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Chats = ({navigation}) => {
  const [search, setSearch] = useState([]);
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.userContainer,
          index % 2 !== 0 ? styles.oddContainer : null,
        ]}
        onPress={() => navigation.navigate('Chat', {userName: item.fullName})}>
        <View style={styles.userImageContainer}>
          {item.isOnline && item.isOnline === true && (
            <View style={styles.onlineIndicator} />
          )}
          <Image
            source={item.userImg}
            resizeMode="contain"
            style={styles.userImage}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: SIZES.width - 104,
          }}>
          <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>{item.fullName}</Text>
            <Text style={styles.lastSeen}>{item.lastMessage}</Text>
          </View>

          <View
            style={{
              position: 'absolute',
              right: 4,
              alignItems: 'center',
            }}>
            <Text style={styles.lastMessageTime}>{item.lastMessageTime}</Text>
          </View>
          <TouchableOpacity style={{
            width:20,
            height:20,
            
          }}>
            <Text style={styles.messsagesInQueue}>{item.messsagesInQueue}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  const renderContent = () => {
    return (
      <View>
        <View style={styles.searchBar}>
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color={COLORS.gray} />
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
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderContent()}
        </ScrollView>
      </View>
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
  userContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: COLORS.secondaryWhite,
    borderBottomWidth: 1,
  },
  oddContainer: {
    backgroundColor: COLORS.white,
  },
  userImageContainer: {
    paddingVertical: 15,
    marginRight: 22,
  },
  onlineIndicator: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    position: 'absolute',
    top: 14,
    right: 1,
    backgroundColor: COLORS.primary,
    zIndex:999,
    borderWidth:2,
    borderColor:COLORS.white
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfoContainer: {
    flexDirection: 'column',
  },
  lastSeen: {
    fontSize: 14,
    color: COLORS.secondaryGray,
    fontWeight:'bold'
  },
  lastMessage: {
    fontSize: 12,
    color: COLORS.black,
  },
  userName:{
    fontSize:14,
    fontWeight:'900',
    color:COLORS.black,
    marginBottom:4
  },
  lastMessageTime:{
    fontSize:12,
    color:COLORS.black
  },
  messsagesInQueue:{
    fontSize:12
  },
});
