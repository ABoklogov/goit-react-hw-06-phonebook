import { useState, useEffect } from 'react';
// import shortid from 'shortid';
import { connect } from 'react-redux';
import * as action from '../../redux/contacts/contacts-action';
import s from './App.module.css';
import Filter from '../Filter';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';

const App = ({ contacts, filter, addContact, deleteContact, chengeFilter }) => {
  // const [contactsArr, setContacts] = useState(contacts);
  // const [filter, setFilter] = useState('');

  // const addContact = (name, number) => {
  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };
  //   const checkingContacts = el => el.name.toLowerCase() === name.toLowerCase();

  //   if (contacts.some(checkingContacts)) {
  //     alert(`${name} is alreaby in contacts`);
  //     return;
  //   }
  //   setContacts(contacts => [contact, ...contacts]);
  // };

  // const deleteContacts = idContact => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== idContact),
  //   );
  // };

  // const chengeFilter = e => {
  //   setFilter(e.target.value);
  // };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  // useEffect(() => {
  //   const contactsRepositiry = JSON.parse(localStorage.getItem('contacts'));
  //   if (contactsRepositiry) {
  //     setContacts(contactsRepositiry);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
