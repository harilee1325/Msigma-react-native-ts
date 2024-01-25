import instance from '../network/api';
import featuredInstance from '../network/featureApi';

interface ContentResponse {
  success: boolean;
  errorMessage: string;
  statusCode: string;
  contentResp: any;
}

export async function getRequest(url: string): Promise<ContentResponse> {
  let success: boolean = false;
  let errorMessage: string = '';
  let statusCode: string = '';
  let contentResp: any[] = [];

  try {
    const contentResponse = await instance.get(url);
    statusCode = contentResponse.status.toString();
    {
      statusCode === '200' ? (success = true) : (success = false);
    }
    contentResp = contentResponse.data;
    console.log('Response is ' + contentResp);
  } catch (error: any) {
    console.log('Error while logging in:', error);
    errorMessage = error.message;
  }

  return {success, statusCode, contentResp, errorMessage};
}

export async function getRequestFeatured(url: string): Promise<ContentResponse> {
  let success: boolean = false;
  let errorMessage: string = '';
  let statusCode: string = '';
  let contentResp: any[] = [];

  try {
    const contentResponse = await featuredInstance.get(url);
    statusCode = contentResponse.status.toString();
    {
      statusCode === '200' ? (success = true) : (success = false);
    }
    contentResp = contentResponse.data;
    console.log('Response is ' + contentResp);
  } catch (error: any) {
    console.log('Error while logging in:', error);
    errorMessage = error.message;
  }

  return {success, statusCode, contentResp, errorMessage};
}
