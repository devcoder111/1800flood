import * as Actions from '../actions';

const initialState = null;

const chat = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_CHAT: {
			return {
				...action.chat
			};
		}
		case Actions.REMOVE_CHAT: {
			return null;
		}
		case Actions.SEND_MESSAGE: {
			return {
				...state,
				chat: [...state.chat, action]
			};
		}
		default: {
			return state;
		}
	}
};

export default chat;
