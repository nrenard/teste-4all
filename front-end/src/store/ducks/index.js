import { combineReducers } from 'redux';

import user from './user';
import cards from './cards';
import transfers from './transfers';
import contacts from './contacts';
import users from './users';

export default combineReducers({
  user,
  cards,
  transfers,
  contacts,
  users
});
