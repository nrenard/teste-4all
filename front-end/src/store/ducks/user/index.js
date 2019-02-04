export const Types = {
	SET_USER: 'user/SET_USER',

	GET_USER: 'user/GET_USER',
  GET_USER_SUCCESS: 'user/GET_USER_SUCCESS',

  SET_AMOUNT: 'user/SET_AMOUNT'
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

  setAmount: value => ({ type: Types.SET_AMOUNT, payload: { value } }),
}

export default function user(state = INITIAL_STATE, { type, payload }) {
	switch(type) {
		case Types.SET_USER:
      return { ...state, ...payload.data }

		case Types.GET_USER:
      return { ...state, loading: true }

		case Types.GET_USER_SUCCESS:
      return { ...state, ...payload.data, loading: false }

    case Types.SET_AMOUNT:
      return {
        ...state,
          amount: payload.value
        }

		default:
			return state
	}
}
