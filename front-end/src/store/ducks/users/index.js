export const Types = {
	GET_USERS: 'users/GET_USERS',
  GET_USERS_SUCCESS: 'users/GET_USERS_SUCCESS',

	DELETE_USER: 'users/DELETE_USER',
};

const INITIAL_STATE = {
  list: null,
  loading: false,
};

export const Creators = {
	getUsers: () => ({ type: Types.GET_USERS }),
  getUsersSuccess: data => ({ type: Types.GET_USERS_SUCCESS, payload: { data } }),

  deleteUser: id => ({ type: Types.DELETE_USER, payload: { id } })
}

export default function users(state = INITIAL_STATE, { type, payload }) {
	switch(type) {
		case Types.GET_USERS:
      return { ...state, loading: true }

		case Types.GET_USERS_SUCCESS:
      return { ...state, list: payload.data, loading: false }

    case Types.DELETE_USER:
      return {
        ...state,
        list: state.list.filter(item => item.id !== payload.id),
        loading: false
      }

		default:
			return state
	}
}
