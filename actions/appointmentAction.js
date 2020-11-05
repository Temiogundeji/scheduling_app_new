import * as t from '../shared/constants';
import { api } from '../shared/constants';
import { getUserData } from '../shared/global';
import { Alert } from 'react-native';

const getUserData = getUserData('userData');



const APPOINTMENT_ENDPOINT = `http://192.168.43.248:3000/api/v1/appointments/${patient_id}`;

const setAppointments = (appointments={}) => {
    return {
        type:t.user.FETCH_APPOINTMENTS_BY_PATIENT_ID,
        payload: appointments
    };
}

export const fetchAppointmentsByPID = () => {
    return function (dispatch) {
        return fetch(api.FETCH_APPOINTMENTS_BY_PATIENT_ID)
            .then(({ data, numOfAppointments }) => {
                if(status === 'success'){
                    console.log(data);

                }
                dispatch(setAppointments({data, numOfAppointments}))
            })
            .catch();

    }
}