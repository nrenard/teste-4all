export const Types = {
	GET_CONTACTS: 'contacts/GET_CONTACTS',
  GET_CONTACTS_SUCCESS: 'contacts/GET_CONTACTS_SUCCESS',

  ADD_CONTACT: 'contacts/ADD_CONTACT',
  ADD_CONTACT_SUCCESS: 'contacts/ADD_CONTACT_SUCCESS',

  DELETE_CONTACT: 'contacts/DELETE_CONTACT',
  DELETE_CONTACT_SUCCESS: 'contacts/DELETE_CONTACT_SUCCESS',
};

const INITIAL_STATE = {
  list: null,
  loading: false,
};

export const Creators = {
	getContacts: () => ({ type: Types.GET_CONTACTS }),
  getContactsSuccess: data => ({ type: Types.GET_CONTACTS_SUCCESS, payload: { data } }),

  addContact: user => ({ type: Types.ADD_CONTACT, payload: { user } }),
  addContactSuccess: contact => ({ type: Types.ADD_CONTACT_SUCCESS, payload: { contact } }),

  deleteContact: id => ({ type: Types.DELETE_CONTACT, payload: { id } }),
  deleteContactSuccess: id => ({ type: Types.DELETE_CONTACT_SUCCESS, payload: { id } }),
}

export default function contacts(state = INITIAL_STATE, { type, payload }) {
	switch(type) {
		case Types.GET_CONTACTS:
      return { ...state, loading: true }

		case Types.GET_CONTACTS_SUCCESS:
      return { ...state, list: payload.data, loading: false }

    case Types.ADD_CONTACT:
      return { ...state, loading: true }

    case Types.ADD_CONTACT_SUCCESS:
      return {
        ...state,
        list: [
          ...state.list,
          { ...payload.contact }
        ],
        loading: false
      }

    case Types.DELETE_CONTACT:
      return { ...state, loading: true }

    case Types.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== payload.id),
        loading: false
      }

		default:
			return state
	}
}
