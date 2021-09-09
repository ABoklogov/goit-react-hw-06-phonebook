import contactsType from './contacts-type';
import shortid from 'shortid';

export const addContact = (name, number) => ({
  type: contactsType.ADD_CONTACT,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

export const deleteContact = id => ({
  type: contactsType.DELETE_CONTACT,
  payload: id,
});

export const chengeFilter = e => ({
  type: contactsType.FILTER_CONTACTS,
  payload: e.target.value,
});

export const setContacts = arr => ({
  type: contactsType.SET_CONTACTS,
  payload: arr,
});
