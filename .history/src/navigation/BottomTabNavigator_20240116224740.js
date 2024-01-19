import {View, Text, Image} from 'react-native';
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
        tabBarIcon:({focused})=>{
            <Image
            source={}
            />
        }
      }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
