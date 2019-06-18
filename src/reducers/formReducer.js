import { formConstants } from '../actions/index.js';
const initialState = { name: "", message: "" };

export default function formReducer(state = initialState, action) {
    switch (action.type) {
        case formConstants.ADD_MESSAGE:
            return Object.assign({}, state, state.name = "", state.message = "");
        case formConstants.CLEAR_FORM:
            return Object.assign({}, state, state.name = "", state.message = "");
        case formConstants.UPDATE_NAME:
            return Object.assign({}, state, state.name = action.payload);
        case formConstants.UPDATE_MESSAGE:
            return Object.assign({}, state, state.message = action.payload);
        default: 
            return state;
    }
};