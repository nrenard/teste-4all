import { all, takeLatest, call, put } from 'redux-saga/effects';

import {
  requestGetContacts,
  requestAddContact,
  requestDeleteContact,
} from './api';

import { Creators as ContactsActions } from '../../ducks/contacts';
import { Types as TypesActions } from '../../ducks/contacts';

export function* getContacts() {
	try {
    const data = yield call(requestGetContacts);
		yield put(ContactsActions.getContactsSuccess(data))
	} catch (err) {
		console.log('err: ', err);
	}
}

export function* addContacts({ payload }) {
	try {
    const data = yield call(requestAddContact, payload.user.id);

    if (data.error) {
      console.log('error: ', data.error);
    } else {
      yield put(ContactsActions.getContacts())
    }
	} catch (err) {
		console.log('err: ', err);
	}
}

export function* deleteContact({ payload }) {
	try {
    const data = yield call(requestDeleteContact, payload.id);

    if (data.error) {
      console.log('error: ', data.error);
    } else {
      yield put(ContactsActions.deleteContactSuccess(payload.id))
    }
	} catch (err) {
		console.log('err: ', err);
	}
}

export default function* contactsSaga() {
	yield all([
		takeLatest(TypesActions.GET_CONTACTS, getContacts),
		takeLatest(TypesActions.ADD_CONTACT, addContacts),
		takeLatest(TypesActions.DELETE_CONTACT, deleteContact),
	]);
}
