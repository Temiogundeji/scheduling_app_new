import { user } from '../shared/constants';
// import AsyncStorage from '@react-native-community/async-storage';


const initialState = {
    appointments: [],
    appointmentCount: 0
};

const matchWithUserID = (id) => {

}

const appointmentReducer = (state = initialState, action) => {
    switch(action.type) {
        case user.CREATE_NEW_APPOINTMENT:
            return Object.assign({}, state, {
                appointments: state.appointments.concat(action.payload)
            });
        case user.FETCH_ALL_APPOINTMENTS:
            return {
                appointments: state.appointments
            }

        default:
            return state;
   }
}


export default appointmentReducer;