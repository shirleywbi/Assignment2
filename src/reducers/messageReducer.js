const initialState = 
    { messages: [
        {
            name: 'Rick',
            text: 'We\'re no strangers to love. You know the rules and so do I. ' +
            'A full commitment\'s what I\'m thinking of. You wouldn\'t get this from any other guy.',
            index: 0
        },
        {
            name: 'Richard',
            text: 'I just wanna tell you how I\'m feeling... Gotta make you understand...',
            index: 1
        },
        {
            name: 'Paul',
            text: 'Never gonna give you up. Never gonna let you down. ' +
            'Never gonna run around and desert you. Never gonna make you cry. ' +
            'Never gonna say goodbye.',
            index: 2
        },
        {
            name: 'Rick Astley',
            text: 'Never gonna tell a lie and hurt you.',
            index: 3
        }],
    index: 4};

export default function messageReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case 'ADD_MESSAGE':
            const newName = action.name === "" ? "Anonymous" : action.name;
            newState = Object.assign({}, state);
            newState.messages = state.messages.concat({
                name: newName,
                text: action.text,
                index: state.index + 1
            });
            return newState;
        case 'DELETE_MESSAGE':
            newState = Object.assign({}, state);
            newState.messages = state.messages.slice(0);
            newState.messages.splice(action.index, 1);
            return newState;
        case 'DELETE_ALL': 
            return { messages: [], index: 0 };
        default: 
            return state;    
    }
};

// function clearForm() {
//   document.getElementById('name').value = "";
//   document.getElementById('new-msg').value = "";
// }

// function addNewMessage() {
//   try {
//     let text = document.getElementById('new-msg').value;
//     if (text === "") return;
//     let name = getName();
//     addMessage(name, text);
//     clearForm();
//   } catch (err) {
//     console.log(err);
//   }
// }

// function addMessage(name, msg) {
//   msg = name + ' says: "' + msg + '"';
//   let node = document.createElement('li');
//   node.className = "msg";
//   let textnode = document.createTextNode(msg);
//   node.appendChild(textnode);
//   document.getElementById('msg-list').appendChild(node);
//   addDeleteButton(node);
// }

// function deleteMessage() {
//   let node = this.parentNode;
//   node.remove();
// }