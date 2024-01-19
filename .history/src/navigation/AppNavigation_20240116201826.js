import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Chat from '../screens/Chat';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Chat' component={Chat}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigation