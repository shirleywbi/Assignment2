const initialState = 
    { messages: [
        {
            name: 'Rick',
            text: 'We\'re no strangers to love. You know the rules and so do I. ' +
            'A full commitment\'s what I\'m thinking of. You wouldn\'t get this from any other guy.',
            date: "6/2/2019 11:45:00",
            index: 0
        },
        {
            name: 'Richard',
            text: 'I just wanna tell you how I\'m feeling... Gotta make you understand...',
            date: "6/2/2019 11:45:30",
            index: 1
        },
        {
            name: 'Paul',
            text: 'Never gonna give you up. Never gonna let you down. ' +
            'Never gonna run around and desert you. Never gonna make you cry. ' +
            'Never gonna say goodbye.',
            date: "6/2/2019 11:50:00",
            index: 2
        },
        {
            name: 'Rick Astley',
            text: 'Never gonna tell a lie and hurt you.',
            date: "6/3/2019 9:45:00",
            index: 3
        }],
    index: 3};

function findIndex(array, index) {
    for (let msg in array) {
        if (array[msg].index === index) return msg;
    }
}

export default function messageReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case 'ADD_MESSAGE':
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
        case 'DELETE_MESSAGE':
            newState = Object.assign({}, state);
            newState.messages = state.messages.slice(0);
            const index = findIndex(newState.messages, action.payload);
            newState.messages.splice(index, 1);
            return newState;
        case 'DELETE_ALL': 
            return { messages: [], index: 0 };
        default: 
            return state;    
    }
};
