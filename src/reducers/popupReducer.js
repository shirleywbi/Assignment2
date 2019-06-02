const initialState = { hidden: true, name: "", message: "" }

export default function popupReducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case 'SELECT_MESSAGE':
            if (!state.hidden && state.message === action.payload.message && state.name === action.payload.name) {
                newState = Object.assign({}, state, state.hidden = true);
            } else {
                newState = Object.assign({}, state, state.hidden = false); 
            }
            newState.name = action.payload.name;
            newState.message = action.payload.message;
            return newState;
        default:
            return state;
    }
}