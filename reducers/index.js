import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { loginReducer } from './loginReducer';
import { registerReducer } from './registerReducer';
import { appointmentReducer } from './appointmentReducer';

const rootReducer = combineReducers({
    loginReducer: loginReducer,
    registerReducer: registerReducer,
    appointmentReducer: appointmentReducer
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);