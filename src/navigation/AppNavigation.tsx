import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import AccountScreen from '../screens/AccountScreen';
import HomeScreen from '../screens/HomeScreen';
import MyCourseScreen from '../screens/MyCourseScreen';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SubjectListScreen from '../screens/SubjectListScreen';

const DrawerStack = createDrawerNavigator();
export default function drawerStackNavigation() {
  return (
    <DrawerStack.Navigator initialRouteName="Home">
      <DrawerStack.Screen
        name="Home"
        component={HomeStackNavigation}
        options={{title: 'Msigma Infotech'}}
      />
      <DrawerStack.Screen name="MyCourse" component={MyCourseScreen} />
      <DrawerStack.Screen name="Account" component={AccountScreen} />
    </DrawerStack.Navigator>
  );
}

const StackNav = createNativeStackNavigator();
export function HomeStackNavigation() {
  return (
    <StackNav.Navigator screenOptions={{headerShown: false}}>
      <StackNav.Screen name="HomeScreen" component={HomeScreen} />
      <StackNav.Screen name="SubjectList" component={SubjectListScreen} />
    </StackNav.Navigator>
  );
}
