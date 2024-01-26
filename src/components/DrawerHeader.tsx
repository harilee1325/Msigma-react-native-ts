import React = require('react');
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';

interface Props {
  title: string;
}

const CustomDrawer: React.FC<Props> = props => {
  const navigation = useNavigation();

  return (
    <View style={{flexDirection: 'row', height: 50, borderColor: 'red'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}>
        <Image
          source={require('../assets/hamburger.png')}
          style={{width: 40, height: 40, marginStart: 10}}
        />
      </TouchableOpacity>

      <Text style={{color: 'black', fontSize: 25, marginStart: 10}}>
        {' '}
        {props.title}
      </Text>
    </View>
  );
};

export default CustomDrawer;
