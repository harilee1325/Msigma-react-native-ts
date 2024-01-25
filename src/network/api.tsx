import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from '../utils/Constants';

let tokenHeader = '';

var instance = axios.create();
instance.defaults.baseURL = Constants.BASEURL;
instance.defaults.headers.common['Content-Type'] = 'application/json';
export default instance;


export function setHeader() {
  tokenHeader = '';
  const tokenData = async () => {
    try {
      const token = await AsyncStorage.getItem(Constants.TOKEN);
      console.log(token);
      tokenHeader = 'Bearer ' + token;
    } catch (e) {
      // read error
    }

    console.log('local fetch.' + tokenData);
  };
}
