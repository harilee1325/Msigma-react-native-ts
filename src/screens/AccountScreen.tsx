import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Constants from '../utils/Constants';
import {getItem, setStringItem} from '../utils/Utils';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../context/userSlice';
import CustomButton from '../components/ButtonComponent';
import {userData} from '../context/userDataSlice';
import Spacer from '../components/Spacer';

interface ProfileInterface {
  name: string;
  branch: string;
}

const AccountScreen: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    setStringItem(Constants.USERNAME, '');
    setStringItem(Constants.IS_LOGIN, 'fale');
    dispatch(userLogin(false));
    dispatch(userData(['', '', '', '']));
  };

  console.log(getItem(Constants.IS_LOGIN));

  const name = useSelector((state: any) => state.userReducer.name);
  const branch = useSelector((state: any) => state.userReducer.branch);
  console.log('name is ' + name);
  return (
    <View style={styles.container}>
      <View style={styles.headerProfile}>
        <Text style={styles.mainText}>{name}</Text>
        <Text style={styles.mainText}>{branch}</Text>
      </View>
      <Spacer top={100} bottom={0} left={0} right={0} />
      <CustomButton status={false} action={handleLogout} text="Logout" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerProfile: {
    height: 100,
    backgroundColor: 'blue',
  },
  mainText: {
    fontSize: 16,
    color: 'white',
  },
});

export default AccountScreen;
