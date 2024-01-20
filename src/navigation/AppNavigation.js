import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Chat, Intro, Welcome} from '../screens';
import BottomTabNavigator from './BottomTabNavigator';
import Animate from '../screens/Animate';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Animate"
        screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name='Animate' component={Animate}/>
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Main" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
