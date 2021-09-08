import { useState, useEffect } from 'react';
// import shortid from 'shortid';
import { connect } from 'react-redux';
import * as action from '../../redux/contacts/contacts-action';
import s from './App.module.css';
import Filter from '../Filter';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';

const App = ({ contacts, addContact, deleteContacts }) => {
  // const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

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

  const chengeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  // useEffect(() => {
  //   const contacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (contacts) {
  //     setContacts(contacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={chengeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContacts}
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
    addContact: () => dispatch(action.addContact()),
    deleteContacts: () => dispatch(action.deleteContacts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
