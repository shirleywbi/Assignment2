import { combineReducers } from 'redux';

import messages from "./messageReducer.js";
import form from "./formReducer.js";


export default combineReducers({
    messages, form
});
