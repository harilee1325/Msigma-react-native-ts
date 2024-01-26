import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginUser} from '../hooks/AuthenticationApi';
import Toast from 'react-native-simple-toast';
import {setStringItem} from '../utils/Utils';
import Constants from '../utils/Constants';

import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../context/userSlice';
import {userData} from '../context/userDataSlice';
import CustomButton from '../components/ButtonComponent';

const LoginScreen: React.FC = () => {
  const [email, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const [loading, setLoadingValue] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const handleLogin = async () => {
    if (email.length != 0 && password.length != 0) {
      setLoadingValue(true);

      const {success, statusCode, loginResp, errorMessage} = await loginUser({
        loginUsername: email,
        loginPassword: password,
      });

      if (success) {
        setStringItem(Constants.USERNAME, email);
        setStringItem(Constants.IS_LOGIN, 'true');
        setStringItem(Constants.NAME, loginResp.name);
        setStringItem(Constants.TOKEN, loginResp.token);
        setStringItem(Constants.ID, loginResp.id);
        setStringItem(Constants.SEM, loginResp.sem);

        dispatch(userLogin([true]));
        dispatch(
          userData([
            loginResp.name,
            loginResp.token,
            loginResp.id,
            loginResp.sem,
          ]),
        );
      }

      setLoadingValue(false);
    } else {
      console.log('enter details first');
    }
  };

  const handleSignUp = () => {
    // Implement your sign-up navigation logic here
    console.log('Navigate to sign-up screen');
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/tick_icon.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Username Field */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={email}
        onChangeText={setUsername}
      />

      {/* Password Field with Hide/Show Indicator */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={isPasswordHidden}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.passwordIcon}
          onPress={togglePasswordVisibility}>
          <View>
            {isPasswordHidden ? (
              <Icon name="remove-red-eye" size={20} />
            ) : (
              <Icon name="password" size={20} />
            )}
          </View>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <CustomButton status={loading} action={handleLogin} text="Login" />

      {/* Sign Up Text */}
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  passwordToggle: {
    marginLeft: 'auto',
    color: 'blue',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signUpText: {
    marginTop: 10,
    color: 'blue',
  },
  passwordIcon: {
    marginStart: -25,
    marginBottom: 5,
  },
});

export default LoginScreen;
