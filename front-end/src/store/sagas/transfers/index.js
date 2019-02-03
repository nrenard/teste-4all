import { all, takeLatest, call, put } from 'redux-saga/effects';

import {
  requestGetTransfers,
} from './api';

import { Creators as TransfersActions } from '../../ducks/transfers';
import { Types as TypesActions } from '../../ducks/transfers';

export function* getTransfers() {
	try {
    const data = yield call(requestGetTransfers);
		yield put(TransfersActions.getTransfersSuccess(data));
	} catch (err) {
		console.log('err: ', err);
	}
}

export default function* transfersSaga() {
	yield all([
		takeLatest(TypesActions.GET_TRANSFERS, getTransfers),
	]);
}
