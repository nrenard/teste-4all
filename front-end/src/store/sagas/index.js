import { all, takeLatest }  from 'redux-saga/effects';

import { getUser } from './user';

import { Types as UserActions } from '../ducks/user';

export default function* rootSaga() {
	yield all([
		takeLatest(UserActions.GET_USER, getUser)
	]);
}
