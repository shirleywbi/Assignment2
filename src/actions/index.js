export const clearForm = (text) => {
	return {
		type: 'CLEAR_FORM',
		payload: text
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