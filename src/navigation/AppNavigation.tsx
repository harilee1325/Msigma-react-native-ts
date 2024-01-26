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
        options={{
          headerShown: false,
        }}
      />
      <DrawerStack.Screen
        name="MyCourse"
        component={MyCourseScreen}
        options={{
          headerShown: false,
        }}
      />
      <DrawerStack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
        }}
      />
    </DrawerStack.Navigator>
  );
}

const StackNav = createNativeStackNavigator();
export function HomeStackNavigation() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="SubjectList"
        component={SubjectListScreen}
        options={{
          title: 'Subject Details',
          headerBackTitle: 'Back',
        }}
      />
    </StackNav.Navigator>
  );
}
