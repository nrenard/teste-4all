import { all, takeLatest, call, put } from 'redux-saga/effects';

import {  requestGetUsers } from './api';

import { Creators as UsersActions } from '../../ducks/users';
import { Types as TypesActions } from '../../ducks/users';

export function* getUsers() {
	try {
    const data = yield call(requestGetUsers);
		yield put(UsersActions.getUsersSuccess(data));
	} catch (err) {
		console.log('err: ', err);
	}
}

export default function* usersSaga() {
	yield all([
		takeLatest(TypesActions.GET_USERS, getUsers),
	]);
}
