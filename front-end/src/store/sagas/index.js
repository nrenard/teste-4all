import { all }  from 'redux-saga/effects';

import userSaga from './user';
import cardsSaga from './cards';
import transfersSaga from './transfers';
import contactsSaga from './contacts';
import usersSaga from './users';

export default function* rootSaga() {
	yield all([
		userSaga(),
    cardsSaga(),
    transfersSaga(),
    contactsSaga(),
    usersSaga(),
	]);
}
