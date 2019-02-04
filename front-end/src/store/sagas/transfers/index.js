import { all, takeLatest, call, put } from 'redux-saga/effects';

import { requestGetTransfers, requestAddTransfer } from './api';

import { Creators as TransfersActions } from '../../ducks/transfers';
import { Creators as UserActions } from '../../ducks/user';
import { Types as TypesActions } from '../../ducks/transfers';

export function* getTransfers() {
	try {
    const data = yield call(requestGetTransfers);
		yield put(TransfersActions.getTransfersSuccess(data));
	} catch (err) {
		console.log('err: ', err);
	}
}

export function* addTransfers({ payload }) {
	try {
    const data = yield call(requestAddTransfer, payload.fields);

    if (!data.error) {
      yield put(TransfersActions.getTransfers());
      yield put(UserActions.setAmount(data.amount));
    }
	} catch (err) {
		console.log('err: ', err);
	}
}

export default function* transfersSaga() {
	yield all([
		takeLatest(TypesActions.GET_TRANSFERS, getTransfers),
		takeLatest(TypesActions.ADD_TRANSFERS, addTransfers),
	]);
}
