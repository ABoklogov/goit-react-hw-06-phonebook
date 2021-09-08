import { createStore } from 'redux';
import contactsType from './contacts-action';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case contactsType.ADD_CONTACT:
      const checkingContacts = el =>
        el.name.toLowerCase() === payload.name.toLowerCase();
      if (state.contacts.items.some(checkingContacts)) {
        alert(`${payload.name} is alreaby in contacts`);
        return;
      }
      return [...state.contacts.items, payload];

    case contactsType.DELETE_CONTACT:
      return state.contacts.items.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
