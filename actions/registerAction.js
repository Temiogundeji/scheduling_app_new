import * as t from '../shared/constants';
import { api } from '../shared/constants';
import { Alert } from 'react-native';
import { getUserData, storeUserData } from '../shared/global';

const setRegisterState = (userData) => {
    return {
        type: t.user.SET_REGISTER_STATE,
        payload: userData
    }
}

export const register = (userData, callback = () => {}) => {
    const {
        p_firstname,
        p_lastname,
        email,
        password,
        p_img,
        genotype,
        blood_group,
        frequent_ailment
     } = userData;

     return (dispatch) => {
         return fetch(api.REGISTER_ENDPOINT, {
             method: 'POST',
             headers: {
                 Accept: 'application/json',
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({
               p_fname:  p_firstname,
               p_lname: p_lastname,
               email: email,
               pwd: password,
               p_img: p_img,
               genotype: genotype,
               blood_group: blood_group,
               frequent_ailment: frequent_ailment
             })
         })
         .then((response) => response.json())
         .then((json) => {
            console.log(json);
            const { token, message, data, status } = json;
            if(status === 'success'){
                storeUserData('userToken', token);
                dispatch(setRegisterState(data));
                Alert.alert('Success', message);
                callback();
            }
            else {
                Alert.alert('Failed', 'Some error occured, please retry');
            }
         })
         .catch(err => {
            Alert.alert('Login Failed', 'Some error occured, please retry');
            console.log(err);
         });
    }

}
