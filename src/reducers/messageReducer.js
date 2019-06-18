import { messageConstants, fetchConstants } from '../actions/index.js';

const initialState = {
    messages: [],
    loading: false,
    error: false
};

export default function messageReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case fetchConstants.FETCH_MESSAGES_REQUEST:
            newState = Object.assign({}, state);
            newState.loading = true;
            return newState;
        case fetchConstants.FETCH_MESSAGES_SUCCESS:
            newState = Object.assign({}, state);
            newState.loading = false;
            newState.messages = action.payload.messages;
            return newState;
        case fetchConstants.FETCH_MESSAGES_FAILURE:
            newState = Object.assign({}, state);    
            newState.loading = false;
            newState.error = true;
            return newState;
        case messageConstants.ADD_MESSAGE:
        case messageConstants.EDIT_MESSAGE:
        case messageConstants.DELETE_MESSAGE:
        case messageConstants.DELETE_ALL: 
            newState = Object.assign({}, state);
            newState.messages = action.payload;
            newState.loading = false;
            return newState;
        default:
            return state;
    }
}