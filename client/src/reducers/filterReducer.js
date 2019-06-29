import { filterConstants } from '../actions/index.js';
const initialState = { name: "" };

export default function filterReducer(state = initialState, action) {
    switch (action.type) {
        case filterConstants.UPDATE_NAME_FILTER:
            return Object.assign({}, state, state.name = action.payload);
        default: 
            return state;
    }
};