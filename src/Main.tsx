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
import {userData} from './context/userDataSlice';

export default function Main(): React.FC {
  const isLoggedIn = useSelector((state: any) => state.userReducer.isLoggedIn);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const isLogin = await getItem(Constants.IS_LOGIN);
      const name = await getItem(Constants.NAME);
      const token = await getItem(Constants.TOKEN);
      const id = await getItem(Constants.ID);
      const sem = await getItem(Constants.SEM);

      if (isLogin === 'true') {
        dispatch(userLogin(true));
        dispatch(userData([name, token, id, sem]));
      } else {
        dispatch(userLogin(false));
        dispatch(userData(['', '', '', '']));
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
