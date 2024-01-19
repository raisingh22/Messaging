import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { Chat, Welcome } from '../screens';


const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='Chat' component={Chat}/>
        {/* <Stack.Screen name='Chats' component={Chats}/> */}
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='Intro' component={Intro}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigation