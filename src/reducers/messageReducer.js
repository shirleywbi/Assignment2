import { messageConstants, fetchConstants } from '../actions/index.js';

const initialMessageState = [];

function getNextIndex(state) {
    if (state == []) {
        return 0;
    } else {
        console.log(state);
        return state[state.length-1].index + 1;
    }
}

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