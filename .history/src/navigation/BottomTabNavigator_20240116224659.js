import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Chats} from '../screens';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Chats} 
      options={{
        tabBarIcon:(())=>{
            
        }
      }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
