import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Logo from '../assets/tick_icon.png';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={Logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
  },
});
