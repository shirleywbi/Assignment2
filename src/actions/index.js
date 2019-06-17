// Reference: 
// https://redux.js.org/advanced/async-actions#async-action-creators
// https://daveceddia.com/where-fetch-data-redux/

// Constants
export const formConstants = {
	CLEAR_FORM: 'CLEAR_FORM',
	UPDATE_NAME: 'UPDATE_NAME',
	UPDATE_MESSAGE: 'UPDATE_MESSAGE'
};

export const messageConstants = {
	ADD_MESSAGE: 'ADD_MESSAGE',
	DELETE_MESSAGE: 'DELETE_MESSAGE',
	DELETE_ALL: 'DELETE_ALL',
	TOGGLE_MESSAGE: 'TOGGLE_MESSAGE',
	SELECT_MESSAGE: 'SELECT_MESSAGE'
};

export const fetchConstants = {
	FETCH_MESSAGES_REQUEST: 'FETCH_MESSAGES_REQUEST',
	FETCH_MESSAGES_SUCCESS: 'FETCH_MESSAGES_SUCCESS',
	FETCH_MESSAGES_FAILURE: 'FETCH_MESSAGES_FAILURE'
};

// Form actions
export const clearForm = () => {
	return {
		type: formConstants.CLEAR_FORM
	}
}

export const updateName = (event) => {
	return {
		type: formConstants.UPDATE_NAME,
		payload: event.target.value
	}
}

export const updateMessage = (event) => {
	return {
		type: formConstants.UPDATE_MESSAGE,
		payload: event.target.value
	}
}

// Message actions
export const addMessage = (msg) => {
	return {
		type: messageConstants.ADD_MESSAGE,
		payload: msg
	}
}

export const deleteMessage = key => {
	return {
		type: messageConstants.DELETE_MESSAGE,
		payload: key
	}
}

export const deleteAllMessage = () => {
	return {
		type: messageConstants.DELETE_ALL
	}
}

export const toggleDetailedMessage = () => {
	return {
		type: messageConstants.TOGGLE_MESSAGE
	}
}

// Sidebar actions
export const selectMessage = (name, date, message, key) => {
	return {
		type: messageConstants.SELECT_MESSAGE,
		payload: { name, date, message, key }
	}
}

// Fetch Actions
// Get Messages:
export function getMessages() {
	return dispatch => {
		dispatch(fetchMessageRequest());
		return fetch("http://localhost:9000/messages")
			.then(handleErrors)
			.then(res => res.json())
			.then(res => {
				dispatch(fetchMessageSuccess(res));
				return res;
			})
			.catch(err => dispatch(fetchMessageFailure(err)));
	};
}

export function postMessage(name, text) {
	return dispatch => {
		dispatch(fetchMessageRequest());
		let new_name = getName(name);
		let date = getCurrDate();
		let key = getKey(date);
		return fetch("http://localhost:9000/messages/", {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: new_name,
				text: text,
				date: date,
				key: key
			})
		})
			.then(handleErrors)
			.then(res => res.json())
			.then(res => {
				dispatch(fetchMessageSuccess(res));
				return res;
			})
			.then(res => addMessage(res))
			.catch(err => dispatch(fetchMessageFailure(err)));
	};
}

// export function deleteMessages() {
// 	return dispatch => {
// 		dispatch(fetchMessageRequest());
// 		return fetch()
// 	}
// }

// To handle HTTP errors
const handleErrors = (response) => {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

export const fetchMessageRequest = () => {
	return {
		type: fetchConstants.FETCH_MESSAGES_REQUEST
	}
}

export const fetchMessageSuccess = (messages) => {
	return {
		type: fetchConstants.FETCH_MESSAGES_SUCCESS,
		payload: { messages }
	}
}

export const fetchMessageFailure = (err) => {
	return {
		type: fetchConstants.FETCH_MESSAGES_FAILURE,
		error: { err }
	}
}

function getName(name) {
	return name === "" ? "Anonymous" : name;
}

function getCurrDate() {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const hours = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();
    return month + '/' + date + '/' + year + ' ' + hours + ':' + min + ':' + sec;
}

function getKey(date) {
	return date.replace(/[^a-zA-Z0-9]/gi,'');
}