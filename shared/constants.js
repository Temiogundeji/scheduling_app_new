export const user = {
    SET_LOGIN_STATE: "SET_LOGIN_STATE",
    LOGIN_REQUEST: "LOGIN_REQUEST",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAILURE: "LOGIN_FAILURE",
    SET_REGISTER_STATE: "SET_REGISTER_STATE",
    REGISTER_REQUEST: "REGISTER_REQUEST",
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_FAILURE: "REGISTER_FAILURE",
    FETCH_ALL_APPOINTMENTS_BY_ID: "FETCH_ALL_APPOINTMENT_BY_ID",
    CREATE_NEW_APPOINTMENT: "CREATE_NEW_APPOINTMENT"
};

export const api = {
    LOGIN_ENDPOINT:'http://192.168.43.248:3000/api/v1/patient/login',
    REGISTER_ENDPOINT: 'http://192.168.43.248:3000/api/v1/patients/',
    APPOINTMENT_ENDPOINT: 'http://192.168.43.248:3000/api/v1/appointments',
    // FETCH_APPOINTMENTS_BY_PATIENT_ID: 'http://192.168.43.248:3000/api/v1/appointments/:id'
};