import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { Creators as UserActions } from '../../ducks/user';

export function* getUser() {
	try {
		const response = yield call(api.get, '/account');
		yield put(UserActions.getUserSuccess(response.data))
	} catch (err) {
		console.log('err: ', err);
	}
}
