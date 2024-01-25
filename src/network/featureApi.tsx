import axios from 'axios';
import Constants from '../utils/Constants';

var featuredInstance = axios.create();
featuredInstance.defaults.baseURL = Constants.NEW_BASE;
featuredInstance.defaults.headers.common['Content-Type'] = 'application/json';

export default featuredInstance;
