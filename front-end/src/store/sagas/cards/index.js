import { all, takeLatest, call, put } from 'redux-saga/effects';

import {
  requestGetCards,
  requestAddCard,
  requestDeleteCard,
  requestEditCard
} from './api';

import { Creators as CardsActions } from '../../ducks/cards';
import { Types as TypesActions } from '../../ducks/cards';

export function* getCards() {
	try {
    const data = yield call(requestGetCards);
		yield put(CardsActions.getCardsSuccess(data))
	} catch (err) {
		console.log('err: ', err);
	}
}

export function* addCards({ payload }) {
	try {
    const data = yield call(requestAddCard, payload.fields);

    if (data.error) {
      console.log('error: ', data.error);
    } else {
      yield put(CardsActions.addCardSuccess(data))
    }
	} catch (err) {
		console.log('err: ', err);
	}
}

export function* deleteCard({ payload }) {
	try {
    const data = yield call(requestDeleteCard, payload.id);

    if (data.error) {
      console.log('error: ', data.error);
    } else {
      yield put(CardsActions.deleteCardSuccess(payload.id))
    }
	} catch (err) {
		console.log('err: ', err);
	}
}

export function* editCard({ payload }) {
	try {
    const data = yield call(requestEditCard, payload.card);

    if (data.error) {
      console.log('error: ', data.error);
    } else {
      yield put(CardsActions.editCardSuccess(payload.card))
    }
	} catch (err) {
		console.log('err: ', err);
	}
}

export default function* cardsSaga() {
	yield all([
		takeLatest(TypesActions.GET_CARDS, getCards),
		takeLatest(TypesActions.ADD_CARD, addCards),
		takeLatest(TypesActions.DELETE_CARD, deleteCard),
		takeLatest(TypesActions.EDIT_CARD, editCard),
	]);
}
