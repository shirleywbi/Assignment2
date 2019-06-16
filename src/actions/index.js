// Reference: https://redux.js.org/advanced/async-actions#async-action-creators
import fetch from 'cross-fetch';

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
	FETCH_POST_REQUEST: 'FETCH_POST_REQUEST',
	FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
	FETCH_POSTS_FAILURE: 'FETCH_POSTS_FAILURE'
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
export const addMessage = (name, text, index) => {
	return {
		type: messageConstants.ADD_MESSAGE,
		payload: { name, text, index }
	}
}

export const deleteMessage = index => {
	return {
		type: messageConstants.DELETE_MESSAGE,
		payload: index
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
export const selectMessage = (name, date, message, index) => {
	return {
		type: messageConstants.SELECT_MESSAGE,
		payload: { name, date, message, index }
	}
}

// Fetch actions
export const getMessage = () => {
	return {
		type: fetchConstants.FETCH_POST_REQUEST
	}
}

export const getMessageSuccess = (response) => {
	return {
		type: fetchConstants.FETCH_POSTS_SUCCESS,
		payload: response
	}
}

export const getMessageFailure = (err) => {
	return {
		type: fetchConstants.FETCH_POSTS_FAILURE,
		error: err
	}
}