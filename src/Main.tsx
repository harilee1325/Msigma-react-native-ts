import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext, useEffect, useState} from 'react';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AccountScreen from './screens/AccountScreen';
import TrackListScreen from './screens/MyCourseScreen';
import TrackCreateScreen from './screens/TrackCreateScreen';
import {getItem} from './utils/Utils';
import Constants from './utils/Constants';
import {View} from 'react-native';
import LoginStackNavigation from './navigation/LoginStackNavigation';
import AppNavigation from './navigation/AppNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from './context/userSlice';
import SplashScreen from './screens/SplashScreen';

export default function Main(): React.FC {
  const isLoggedIn = useSelector((state: any) => state.userReducer.isLoggedIn);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const isLogin = await getItem(Constants.IS_LOGIN);
      if (isLogin === 'true') {
        dispatch(userLogin(true));
      } else {
        dispatch(userLogin(false));
      }
      setIsLoading(false);
    })();
  }, []);
  return isLoading ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigation /> : <LoginStackNavigation />}
    </NavigationContainer>
  );
}
