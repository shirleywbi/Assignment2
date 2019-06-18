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
	EDIT_MESSAGE: 'EDIT_MESSAGE',
	DELETE_MESSAGE: 'DELETE_MESSAGE',
	DELETE_ALL: 'DELETE_ALL',
	TOGGLE_MESSAGE: 'TOGGLE_MESSAGE'
};

export const editConstants = {
	UPDATE_EDIT: 'UPDATE_EDIT',
	TOGGLE_EDIT: 'TOGGLE_EDIT'
}

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

export const updateEditBox = (event) => {
	return {
		type: editConstants.UPDATE_EDIT,
		payload: event.target.value
	}
}

export const toggleEdit = (id) => {
	return {
		type: editConstants.TOGGLE_EDIT,
		payload: id
	}
}

export const editMessage = (res) => {
	return {
		type: messageConstants.EDIT_MESSAGE,
		payload: res
	}
}

export const clearOne = (id) => {
	return {
		type: messageConstants.DELETE_MESSAGE,
		payload: id
	}
}

export const clearAll = (res) => {
	return {
		type: messageConstants.DELETE_ALL,
		payload: res
	}
}

// Sidebar actions
export const toggleMessage = (name, date, message, id) => {
	return {
		type: messageConstants.TOGGLE_MESSAGE,
		payload: { name, date, message, id }
	}
}

// Server Actions
export function getMessages() {
	return async dispatch => {
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
	return async dispatch => {
		dispatch(fetchMessageRequest());
		let new_name = getName(name);
		let date = getCurrDate();
		let id = getID(date);
		return fetch("http://localhost:9000/messages/", {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: new_name,
				text: text,
				date: date,
				id: id
			})
		})
			.then(handleErrors)
			.then(res => res.json())
			.then(res => {
				dispatch(addMessage(res));
			})
			.catch(err => dispatch(fetchMessageFailure(err)));
	};
}

export function postEditMessage(msg, new_text) {
	return async dispatch => {
		return fetch("http://localhost:9000/messages/"+msg.id, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: msg.name,
				text: new_text,
				date: msg.date,
				id: msg.id
			})
		})
			.then(handleErrors)
			.then(res => res.json())
			.then(res => {
				dispatch(editMessage(res));
			})
			.catch(err => dispatch(fetchMessageFailure(err)));
	};
}

export function deleteMessage(id) {
	return async dispatch => {
		dispatch(fetchMessageRequest());
		return fetch("http://localhost:9000/messages/"+id, {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(handleErrors)
			.then(res => res.json())
			.then(res => {
				dispatch(clearOne(res));
			})
			.catch(err => dispatch(fetchMessageFailure(err)));
	};
}

export function deleteMessages() {
	return async dispatch => {
		dispatch(fetchMessageRequest());
		return fetch("http://localhost:9000/messages/", {
			method: 'delete'
		})
			.then(handleErrors)
			.then(res => res.json())
			.then((res) => {
				dispatch(clearAll(res));
			})
			.catch(err => dispatch(fetchMessageFailure(err)));
	};
}

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

function getID(date) {
	return date.replace(/[^a-zA-Z0-9]/gi,'');
}