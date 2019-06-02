const initialState = { hidden: true, name: "", message: "" }

export default function popupReducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case 'SELECT_MESSAGE':
            if (state.hidden) {
                newState = Object.assign({}, state, state.hidden = false);
            } else {
                newState = Object.assign({}, state, state.hidden = true); 
            }
            newState.name = action.payload.name;
            newState.message = action.payload.message;
            return newState;
        default:
            return state;
    }
}