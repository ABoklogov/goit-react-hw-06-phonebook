import { createStore } from 'redux';
import contactsType from './contacts/contacts-type';

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
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, payload],
        },
      };

    case contactsType.DELETE_CONTACT:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(contact => contact.id !== payload),
        },
      };

    case contactsType.FILTER_CONTACTS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          filter: payload,
        },
      };

    case contactsType.SET_CONTACTS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: payload,
        },
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
