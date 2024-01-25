import instance from '../network/api';

import {setStringItem} from '../utils/Utils';
import Constants from '../utils/Constants';

import {useNavigation} from '@react-navigation/native';

interface LogInUserProp {
  loginUsername: string;
  loginPassword: string;
}

interface LoginUserResponse {
  success: boolean;
  errorMessage: string;
  statusCode: string;
  loginResp: any;
}

export async function loginUser({
  loginUsername,
  loginPassword,
}: LogInUserProp): Promise<LoginUserResponse> {
  let success: boolean = false;
  let errorMessage: string = '';
  let statusCode: string = '';
  let loginResp: any;

  const logInPayload = {
    email: loginUsername,
    password: loginPassword,
  };

  try {
    const logInResponse = await instance.post(
      'btech/student/login/',
      logInPayload,
    );
    statusCode = logInResponse.status.toString();
    {
      statusCode === '200' ? (success = true) : (success = false);
    }
    loginResp = logInResponse.data;
    console.log(logInResponse);

    if (statusCode === '200') setStringItem(Constants.IS_LOGIN, 'true');
  } catch (error: any) {
    console.log('Error while logging in:', error);
    errorMessage = error.message;
  }

  return {success, statusCode, loginResp, errorMessage};
}
