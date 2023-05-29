import { combineReducers } from 'redux';

import { contactsReducer } from './contacts/contacts-reducer';
import { filterReducer } from './filter/filter-reducers';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
