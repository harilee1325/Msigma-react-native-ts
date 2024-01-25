import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';

const LoginStack = createNativeStackNavigator();
export default function LoginStackNavigation() {
  return (
    <LoginStack.Navigator initialRouteName="Login">
      <LoginStack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Msigma Infotech'}}
      />
    </LoginStack.Navigator>
  );
}
