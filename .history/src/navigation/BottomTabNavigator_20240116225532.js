import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Chats} from '../screens';
import {COLORS, icons} from '../constants';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle:{
            position:'absolute',
            bottom:0,
            left:0,
            right:0,
           backgroundColor:
        }
      }}>
      <Tab.Screen
        name="Home"
        component={Chats}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              resizeMode="contain"
              source={focused ? icons.internet : icons.internetOutline}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.primary : COLORS.gray,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
