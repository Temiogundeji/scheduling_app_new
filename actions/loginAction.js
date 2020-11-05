import * as t from '../shared/constants';
import { api } from '../shared/constants';
import {
    storeUserData,
    handleApiResponseError
} from '../shared/global';

import { Alert } from 'react-native';

const setLoginState = (loginData) => {
    return {
        type: t.user.SET_LOGIN_STATE,
        payload: loginData
    }
}

export const login = (loginInput, callback = () => {}) => {
 const { email, password } = loginInput;
 return (dispatch) => {
     return fetch(api.LOGIN_ENDPOINT, {
         method: 'POST',
         headers: {
             Accept: 'application/json',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
             email: email,
             pwd: password
         }),
     })
    .then((response) => response.json())
    .then((json) =>{
        console.log(json)
        const { status, data, message, token } = json;
        if(status === 'success'){
            storeUserData('userData', json);
            dispatch(setLoginState(data));
            Alert.alert('Login Succesful',message);
            console.log(message);
            callback();
        }
        else{
            Alert.alert('Login Failed', 'Email or Password is incorrect');
            // handleApiResponseError(json);
        }
    })
    .catch(err => {
        Alert.alert('Login Failed', 'Some error occured, please retry');
        console.log(err);

    })
     
 }
}