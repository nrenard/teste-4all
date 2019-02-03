import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { Creators as UserActions } from '../../ducks/user';
import { Types as UserTypes } from '../../ducks/user';

export function* getUser() {
	try {
		const data = yield call(api.get, '/account');
		yield put(UserActions.getUserSuccess(data))
	} catch (err) {
		console.log('err: ', err);
	}
}

export default function* userSaga() {
	yield all([
		takeLatest(UserTypes.GET_USER, getUser),
	]);
}
