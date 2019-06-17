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
export const addMessage = (name, text) => {
	return {
		type: messageConstants.ADD_MESSAGE,
		payload: { name, text }
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

// Fetch actions
export function fetchMessages() {
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

