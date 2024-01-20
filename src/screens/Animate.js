import {StyleSheet, Text, View, Animated} from 'react-native';
import React from 'react';

const Animate = () => {
  const position = new Animated.ValueXY({x: 0, y: 0});
  const position1 = new Animated.ValueXY({x: 0, y: 0});
//   console.log(Animated)
  const handleAnimate = () => {
    return Animated.timing(position, {
      toValue: {x: 10, y: 350},
      duration: 6000,
      useNativeDriver: true,
      bounciness: 20,
      velocity:50
    }).start();
    
  };
  const rotate = position1.x.interpolate({
    inputRange: [0, 100],
    outputRange: ['10deg', '360deg'],
  });
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Animated.View
        style={{
          backgroundColor: 'yellow',
          width: 100,
          height: 100,
        //   alignItems: 'flex-start',
        //   alignSelf: 'center',
        //   justifyContent: 'flex-end',
          transform: [
            {
              translateX: position.x,
            },
            {
              translateY: position.y,
            },
            {
              rotate: rotate,
            },
          ],
        }}>
        <Animated.Text
        //   style={{
        //     transform: [
        //       {
        //         translateX: position.x,
        //       },

        //       {
        //         translateY: position.y,
        //       },
        //       {
        //         rotate: rotate,
        //       },
        //     ],
        //   }}
        //   onPressOut={handleAnimate}
          onPress={handleAnimate}
          >
          Animated
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

export default Animate;

const styles = StyleSheet.create({});
