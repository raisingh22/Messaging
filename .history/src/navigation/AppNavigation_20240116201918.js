import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Chat from '../screens/Chat';
import Chats from '../screens/Chats';
import Welcome from '../screens/Welcome';
import Intro from '../screens/Intro';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator >
        <Stack.Screen name='Chat' component={Chat}/>
        {/* <Stack.Screen name='Chats' component={Chats}/> */}
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='Intro' component={Intro}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigation