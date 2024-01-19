import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen></Stack.Screen>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigation