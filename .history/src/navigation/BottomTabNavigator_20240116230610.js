import React from 'react';
import { View, Image, Platform, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Chats } from '../screens';
import { COLORS, icons } from '../constants';

const Tab = createBottomTabNavigator();

const CustomTabBarBackground = ({ style }) => (
  <View
    style={{
      ...style,
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      backgroundColor: COLORS.white,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: Platform.OS === 'ios' ? 110 : 100,
    }}
  />
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => (
        <View>
          <CustomTabBarBackground style={{ ...props.style }} />
          <BottomTabBar {...props} />
        </View>
      )}
      screenOptions={({ route }) => ({
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
                icon = focused ? icons.bubbleChat : icons.bubbleChatOutline;

              // Customize the AddPost icon
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
                marginBottom: route.name === 'AddPost' ? 20 : 0,
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

const BottomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            key={route.key}
          >
            {options.tabBarIcon({
              focused: isFocused,
              color: isFocused ? COLORS.primary : COLORS.gray,
              size: 24,
            })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabNavigator;
