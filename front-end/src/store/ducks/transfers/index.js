export const Types = {
	GET_TRANSFERS: 'transfers/GET_TRANSFERS',
  GET_TRANSFERS_SUCCESS: 'transfers/GET_TRANSFERS_SUCCESS',

  ADD_TRANSFERS: 'transfers/ADD_TRANSFERS',
  ADD_TRANSFERS_SUCCESS: 'transfers/ADD_TRANSFERS_SUCCESS',
};

const INITIAL_STATE = {
  list: null,
  loading: false,
};

export const Creators = {
	getTransfers: () => ({ type: Types.GET_TRANSFERS }),
  getTransfersSuccess: data => ({ type: Types.GET_TRANSFERS_SUCCESS, payload: { data } }),

  addTransfer: fields => ({ type: Types.ADD_TRANSFERS, payload: { fields } }),
  addTransferSuccess: data => ({ type: Types.ADD_TRANSFERS_SUCCESS, payload: { data } }),
}

export default function transfers(state = INITIAL_STATE, { type, payload }) {
	switch(type) {
		case Types.GET_TRANSFERS:
      return { ...state, loading: true }

		case Types.GET_TRANSFERS_SUCCESS:
      return { ...state, list: payload.data, loading: false }

    case Types.ADD_TRANSFERS:
      return { ...state, loading: true }

    case Types.ADD_TRANSFERS_SUCCESS:
      return {
        ...state,
        list: [
          ...state.list,
          { ...payload.data }
        ],
        loading: false
      }

		default:
			return state
	}
}
