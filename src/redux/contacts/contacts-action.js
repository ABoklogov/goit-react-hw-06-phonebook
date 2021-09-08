import contactsType from './contacts-action';
import shortid from 'shortid';

export const addContact = (name, number) => ({
  type: contactsType.ADD_CONTACT,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

export const deleteContacts = id => ({
  type: contactsType.DELETE_CONTACT,
  payload: id,
});
