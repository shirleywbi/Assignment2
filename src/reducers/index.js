import { combineReducers } from 'redux';

import messageReducer from "./messageReducer.js";
import formReducer from "./formReducer.js";
import popupReducer from "./popupReducer.js";


export default combineReducers({
    messageStore: messageReducer,
    formStore: formReducer,
    popupStore: popupReducer
});
