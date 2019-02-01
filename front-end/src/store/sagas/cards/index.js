import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { Creators as CardsActions } from '../../ducks/cards';

export function* getCards() {
	try {
		const response = yield call(api.get, '/account');
		yield put(CardsActions.getCardsSuccess(response.data))
	} catch (err) {
		console.log('err: ', err);
	}
}
