import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/contacts/contacts-action';
import s from './App.module.css';
import Filter from '../Filter';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';

const App = ({ contacts, setContacts }) => {
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
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setContacts: arr => dispatch(action.setContacts(arr)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
