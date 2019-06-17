import { messageConstants, fetchConstants } from '../actions/index.js';

const initialState = {
    messages: [],
    loading: false,
    error: false
};

function getNextIndex(state) {
    if (state == []) {
        return 0;
    } else {
        console.log(state);
        return state[state.length-1].index + 1;
    }
}

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
            newState.error = action.payload.error;
            return newState;
         case messageConstants.ADD_MESSAGE:  // check the rest of this
            const date = new Date().getDate();
            const month = new Date().getMonth() + 1;
            const year = new Date().getFullYear();
            const hours = new Date().getHours();
            const min = new Date().getMinutes();
            const sec = new Date().getSeconds();
            const newName = action.payload.name === "" ? "Anonymous" : action.payload.name;
            newState = state.slice(0);
            newState = state.concat({
                name: newName,
                text: action.payload.text,
                date: month + '/' + date + '/' + year + ' ' + hours + ':' + min + ':' + sec,
                index: getNextIndex(state)
            });
            return newState;
        case messageConstants.DELETE_MESSAGE:
            newState = state.slice(0);
            newState.splice(action.payload, 1);
            return newState;
        case messageConstants.DELETE_ALL: 
            return [];

        default:
            return state;
    }
}