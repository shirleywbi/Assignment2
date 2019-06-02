export default function formReducer(state = "", action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return "";
        case 'CLEAR_FORM':
            return "";
        default: 
            return state;    
    }
};