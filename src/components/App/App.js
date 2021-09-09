import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/contacts/contacts-action';
import s from './App.module.css';
import Filter from '../Filter';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';

const App = ({
  contacts,
  filter,
  addContact,
  deleteContact,
  chengeFilter,
  setContacts,
}) => {
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  useEffect(() => {
    const contactsRepositiry = JSON.parse(localStorage.getItem('contacts'));
    if (contactsRepositiry) {
      setContacts(contactsRepositiry);
    }
  }, [setContacts]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={(name, number) => addContact(name, number)} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={e => chengeFilter(e)} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={id => deleteContact(id)}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addContact: (name, number) => dispatch(action.addContact(name, number)),
    deleteContact: id => dispatch(action.deleteContact(id)),
    chengeFilter: e => dispatch(action.chengeFilter(e)),
    setContacts: arr => dispatch(action.setContacts(arr)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
