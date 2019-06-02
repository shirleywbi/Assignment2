const initialState = { name: "", message: "" };

export default function formReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return initialState;
        case 'CLEAR_FORM':
            return initialState;
        case 'UPDATE_NAME':
            return Object.assign({}, state, state.name = action.payload);
        case 'UPDATE_MESSAGE':
            return Object.assign({}, state, state.name = action.payload);
        default: 
            return state;
    }
};