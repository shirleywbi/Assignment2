import { messageConstants } from '../actions/index.js';
const initialState = { hidden: true, name: "", date: "", message: "", id: "" }

export default function popupReducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case messageConstants.TOGGLE_MESSAGE:
            if (!state.hidden && state.date === action.payload.date) {
                newState = Object.assign({}, state, state.hidden = true);
            } else {
                newState = Object.assign({}, state, state.hidden = false); 
            }
            newState.name = action.payload.name;
            newState.date = action.payload.date;
            newState.message = action.payload.message;
            return newState;
        case messageConstants.DELETE_ALL:
            newState = Object.assign({}, state, state.hidden = true);
            return newState;
        default:
            return state;
    }
}