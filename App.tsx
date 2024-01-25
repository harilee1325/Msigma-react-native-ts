import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import Main from './src/Main';
import {Provider} from 'react-redux';
import {store} from './src/context/store';
import {Appearance} from 'react-native';

function App(): React.FC {
  useEffect(() => {
    Appearance.setColorScheme('light');
  }, []);
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
