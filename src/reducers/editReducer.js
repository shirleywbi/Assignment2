import { editConstants, messageConstants } from '../actions/index.js';

const initialState = { message: null, hidden: true, activeIndex: 0 };

export default function editReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case editConstants.UPDATE_EDITBOX:
            newState = Object.assign({}, state);
            newState.message = action.payload;
            return newState;
        case editConstants.TOGGLE_EDIT:
            newState = Object.assign({}, state);
            newState.hidden = !state.hidden;
            return newState;
        case messageConstants.EDIT_MESSAGE:
            newState = Object.assign({}, state);
            newState.hidden = true;
            return newState;
        default: 
            return state;
    }
};