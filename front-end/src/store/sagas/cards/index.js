import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { Creators as CardsActions } from '../../ducks/cards';
import { Types as TypesActions } from '../../ducks/cards';

export function* getCards() {
	console.log("getCards")
	try {
		const data = yield call(api.get, '/cards');
		yield put(CardsActions.getCardsSuccess(data))
	} catch (err) {
		console.log('err: ', err);
	}
}

export default function* rootSaga() {
	yield all([
		takeLatest(TypesActions.GET_CARDS, getCards),
	]);
}