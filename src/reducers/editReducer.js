const initialState = { message: "" };

export default function editReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_EDIT':
            return Object.assign({}, state, state.message = action.payload);
        default: 
            return state;
    }
};