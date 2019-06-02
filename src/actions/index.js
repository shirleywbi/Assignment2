export const clearForm = () => {
	return {
		type: 'CLEAR_FORM'
	}
}

export const updateName = (event) => {
	return {
		type: 'UPDATE_MESSAGE',
		payload: event.target.value
	}
}

export const updateMessage = (event) => {
	return {
		type: 'UPDATE_NAME',
		payload: event.target.value
	}
}

export const addMessage = (name, text, index) => {
	return {
		type: 'ADD_MESSAGE',
		payload: { name, text, index }
	}
}

export const deleteMessage = index => {
	return {
		type: 'DELETE_MESSAGE',
		payload: index
	}
}

export const deleteAllMessage = () => {
	return {
		type: 'DELETE_ALL'
	}
}

export const toggleDetailedMessage = () => {
	return {
		type: 'TOGGLE_MESSAGE'
	}
}