import { messageConstants, fetchConstants } from '../actions/index.js';

const initialMessageState = [];

// function findIndex(array, index) {
//     for (let msg in array) {
//         if (array[msg].index === index) return msg;
//     }
// }

export default function messageReducer(state = initialMessageState, action) {
    let newState;
    switch (action.type) {
        case messageConstants.ADD_MESSAGE:
            const date = new Date().getDate();
            const month = new Date().getMonth() + 1;
            const year = new Date().getFullYear();
            const hours = new Date().getHours();
            const min = new Date().getMinutes();
            const sec = new Date().getSeconds();
            const newName = action.payload.name === "" ? "Anonymous" : action.payload.name;
            newState = Object.assign({}, state);
            newState.messages = state.messages.concat({
                name: newName,
                text: action.payload.text,
                date: month + '/' + date + '/' + year + ' ' + hours + ':' + min + ':' + sec,
                index: action.payload.index + 1
            });
            newState.index = state.index + 1
            return newState;
        case messageConstants.DELETE_MESSAGE:
            // newState = Object.assign({}, state);
            // newState.messages = state.messages.slice(0);
            // const index = findIndex(newState.messages, action.payload);
            // newState.messages.splice(index, 1);
            return newState;
        case messageConstants.DELETE_ALL: 
            return { messages: [], index: 0 };
        default: 
            return state;    
    }
};

const initialFetchState = {
    isFetching: false,
    failure: false,
    messages: []
};

function posts(state = initialFetchState, action) {
    let newState;
    switch (action.type) {
        case fetchConstants.FETCH_POST_REQUEST:
            newState = Object.assign({}, state);
            newState.isFetching = true;
            return newState;
        case fetchConstants.FETCH_POSTS_SUCCESS:
            newState = Object.assign({}, state);
            newState.messages = action.payload;
            return newState;
        case fetchConstants.FETCH_POSTS_FAILURE:
            newState = Object.assign({}, state);    
            newState.failure = true;
            return newState;
        default:
            return state;
    }
}