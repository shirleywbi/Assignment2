import { combineReducers } from 'redux';

import messageReducer from "./messageReducer.js";
import formReducer from "./formReducer.js";


export default combineReducers({
    messages: messageReducer,
    form: formReducer
});
