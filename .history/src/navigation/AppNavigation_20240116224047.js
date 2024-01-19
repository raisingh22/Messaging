import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { Chat, Intro, Welcome } from '../screens';


const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator 
    initialRouteName='Intro'
    screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='Chat' component={Chat}/>
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='Intro' component={Intro}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigation