export const Types = {
	GET_CARDS: 'cards/GET_CARDS',
  GET_CARDS_SUCCESS: 'cards/GET_CARDS_SUCCESS',

  ADD_CARD: 'cards/ADD_CARD',
  ADD_CARD_SUCCESS: 'cards/ADD_CARD_SUCCESS',

  DELETE_CARD: 'cards/DELETE_CARD',
  DELETE_CARD_SUCCESS: 'cards/DELETE_CARD_SUCCESS',

  EDIT_CARD: 'cards/EDIT_CARD',
  EDIT_CARD_SUCCESS: 'cards/EDIT_CARD_SUCCESS',
};

const INITIAL_STATE = {
  list: null,
  loading: false,
};

export const Creators = {
	getCards: () => ({ type: Types.GET_CARDS }),
  getCardsSuccess: data => ({ type: Types.GET_CARDS_SUCCESS, payload: { data } }),

  addCard: fields => ({ type: Types.ADD_CARD, payload: { fields } }),
  addCardSuccess: data => ({ type: Types.ADD_CARD_SUCCESS, payload: { data } }),

  deleteCard: id => ({ type: Types.DELETE_CARD, payload: { id } }),
  deleteCardSuccess: id => ({ type: Types.DELETE_CARD_SUCCESS, payload: { id } }),

  editCard: card => ({ type: Types.EDIT_CARD, payload: { card } }),
  editCardSuccess: card => ({ type: Types.EDIT_CARD_SUCCESS, payload: { card } }),
}

export default function cards(state = INITIAL_STATE, { type, payload }) {
	switch(type) {
		case Types.GET_CARDS:
      return { ...state, loading: true }

		case Types.GET_CARDS_SUCCESS:
      return { ...state, list: payload.data, loading: false }

    case Types.ADD_CARD:
      return { ...state, loading: true }

    case Types.ADD_CARD_SUCCESS:
      return {
        ...state,
        list: [
          ...state.list,
          { ...payload.data }
        ],
        loading: false
      }

    case Types.DELETE_CARD:
      return { ...state, loading: true }

    case Types.DELETE_CARD_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== payload.id),
        loading: false
      }

    case Types.EDIT_CARD:
      return { ...state, loading: true }

    case Types.EDIT_CARD_SUCCESS:
      return {
        ...state,
        list: state.list.map(card => {
          if (card.id === payload.card.id) {
            return payload.card;
          }
            return card;
        }),
        loading: false
      }

		default:
			return state
	}
}
