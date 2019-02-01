import { all }  from 'redux-saga/effects';

import userSaga from './user';
import cardsSaga from './cards';

export default function* rootSaga() {
	yield all([
		userSaga(),
		cardsSaga(),
	]);
}
