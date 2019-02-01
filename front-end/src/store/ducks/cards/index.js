export const Types = {
	GET_CARDS: 'cards/GET_CARDS',
	GET_CARDS_SUCCESS: 'cards/GET_CARDS_SUCCESS',
};

const INITIAL_STATE = {
  list: null,
  loading: false,
};

export const Creators = {
	getCards: () => ({ type: Types.GET_CARDS }),

	getCardsSuccess: data => ({ type: Types.GET_CARDS_SUCCESS, payload: { data } }),
}

export default function playlists(state = INITIAL_STATE, { type, payload }) {
	switch(type) {
		case Types.GET_CARDS:
			return { ...state, loading: true }
		case Types.GET_CARDS_SUCCESS:
			return { ...state, list: payload.data, loading: false }
		default:
			return state
	}
}