export const increment = amount => {
	return {
		type: 'INCREMENT_COUNTER',
		payload: amount
	};
};

export const addMessage = text => {
	return {
		type: 'ADD_MESSAGE',
		text
	}
}

