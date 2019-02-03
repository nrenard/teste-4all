export const Types = {
	SET_USER: 'user/SET_USER',

	GET_USER: 'user/GET_USER',
  GET_USER_SUCCESS: 'user/GET_USER_SUCCESS',

  DECREMENT_AMOUNT: 'user/DECREMENT_AMOUNT'
};

const INITIAL_STATE = {
  name: null,
  email: null,
  amount: 0,
  loading: false,
};

export const Creators = {
	setUser: data => ({ type: Types.SET_USER, payload: { data } }),

	getUser: () => ({ type: Types.GET_USER }),

  getUserSuccess: data => ({ type: Types.GET_USER_SUCCESS, payload: { data } }),

  decrementAmount: value => ({ type: Types.DECREMENT_AMOUNT, payload: { value } }),
}

export default function user(state = INITIAL_STATE, { type, payload }) {
	switch(type) {
		case Types.SET_USER:
      return { ...state, ...payload.data }

		case Types.GET_USER:
      return { ...state, loading: true }

		case Types.GET_USER_SUCCESS:
      return { ...state, ...payload.data, loading: false }

      case Types.DECREMENT_AMOUNT:
        return {
          ...state,
            amount: state.amount - payload.value > 0 ? state.amount - payload.value : 0
          }

		default:
			return state
	}
}
