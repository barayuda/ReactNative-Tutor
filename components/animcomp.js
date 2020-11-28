import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

const AnimateImage = (props) => {
  const [scaleValue] = useState(new Animated.Value(1))

  const animateImage = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.4,
        duration: 1500,
        useNativeDriver: true,
        easing: Easing.linear
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
        easing: Easing.linear
      })
    ]).start(() => animateImage());
  };

  React.useEffect(() => {
    animateImage();
  }, []);

  return (
      <View style={{alignItems:'center'}}>
        <Animated.Image
          source={require('../assets/raw_images/undraw_start_building.png')}
          style={[styles.pic, {
            transform: [
              {
                scale: scaleValue
              }
            ]
          }]}
        />
      </View>
  );
}

export default () => <AnimateImage/>

const styles = StyleSheet.create({
  pic: {
    height: 160,
    width: 180,
    
  }
});