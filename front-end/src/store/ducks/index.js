import { combineReducers } from 'redux';

import user from './user';
import cards from './cards';

export default combineReducers({ user, cards });
