import contactsType from './contacts-type';

export const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case contactsType.ADD_CONTACT:
      const checkingContacts = el =>
        el.name.toLowerCase() === payload.name.toLowerCase();
      if (state.some(checkingContacts)) {
        alert(`${payload.name} is alreaby in contacts`);
        return;
      }
      return [...state, payload];

    case contactsType.DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload);

    case contactsType.SET_CONTACTS:
      return [...payload];

    default:
      return state;
  }
};

export const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case contactsType.FILTER_CONTACTS:
      return payload;

    default:
      return state;
  }
};
