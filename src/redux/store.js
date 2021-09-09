import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { itemsReducer } from './contacts/contacts-reducer';
import { filterReducer } from './contacts/contacts-reducer';

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const store = createStore(contactsReducer, composeWithDevTools());
export default store;
