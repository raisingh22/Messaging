import React from 'react';
import { View, Text, Image, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Chats } from '../screens';
import { COLORS, icons } from '../constants';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: COLORS.white,
          height: Platform.OS === 'ios' ? 110 : 100,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
        },
        tabBarIcon: ({ focused }) => {
          let icon;
          switch (route.name) {
            case 'Home':
              icon = focused ? icons.internet : icons.internetOutline;
              break;
            case 'Chat':
              icon = focused ? icons.bubbleChat : icons.bubbleChatOutline;
              break;
            case 'AddPost':
              // Customize the AddPost icon
              icon = focused ? icons.plus : icons.bubbleChatOutline;
              break;
            default:
              break;
          }
          return (
            <Image
              resizeMode="contain"
              source={icon}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.primary : COLORS.gray,
                // marginBottom: route.name === 'Chat' ? 0 : 0,
              }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Chats} />
      <Tab.Screen name="Chat" component={Chats} />
      <Tab.Screen name="AddPost" component={Chats} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
