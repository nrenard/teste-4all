import { all, takeLatest }  from 'redux-saga/effects';

import { getUser } from './user';
import { getCards } from './cards';

import { Types as UserActions } from '../ducks/user';
import { Types as CardsActions } from '../ducks/cards';

export default function* rootSaga() {
	yield all([
		takeLatest(UserActions.GET_USER, getUser),
		takeLatest(CardsActions.GET_CARDS, getCards),
	]);
}
