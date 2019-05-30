import { combineReducers } from 'redux';

const initialState = {
    messages: [
        {
            name: 'Rick',
            text: 'We\'re no strangers to love. You know the rules and so do I. ' +
            'A full commitment\'s what I\'m thinking of. You wouldn\'t get this from any other guy.'
        },
        {
            name: 'Richard',
            text: 'I just wanna tell you how I\'m feeling... Gotta make you understand...'
        },
        {
            name: 'Paul',
            text: 'Never gonna give you up. Never gonna let you down. ' +
            'Never gonna run around and desert you. Never gonna make you cry. ' +
            'Never gonna say goodbye.'
        },
        {
            name: 'Rick Astley',
            text: 'Never gonna tell a lie and hurt you.'
        },
    ]
}

function manageMessage(state = initialState, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return Object.assign({}, state, {text: action.text});
        default: 
            return state;    
    }
    
}

export default combineReducers({
    manageMessage
});



// function loadMessages() {
//   msgs = JSON.parse(msgs);
//   console.log(msgs); 
//   for (let i in msgs) {
//     console.log(msgs[i].text);
//     addMessage(msgs[i].name, msgs[i].text);
//   }
// };

// function clearForm() {
//   document.getElementById('name').value = "";
//   document.getElementById('new-msg').value = "";
// }

// function clearAll() {
//   document.getElementById('msg-list').innerHTML = "";
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

// function getName() {
//   let name = document.getElementById('name').value;
//   return name !== "" ? name : "Anonymous";
// }

// function addDeleteButton(node) {
//   let button = document.createElement('button');
//   button.textContent = "x";
//   button.className = "small-button button";
//   button.addEventListener('click', deleteMessage);
//   node.appendChild(button);
// }

// function deleteMessage() {
//   let node = this.parentNode;
//   node.remove();
// }