import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactItem from './ContactItem';

const ContactList = ({ filter, contacts }) => {
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <ul className={s.contactList}>
      {getVisibleContacts().map(({ id, name, number }) => (
        <li key={id} className={s.contact}>
          <ContactItem id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  };
};

export default connect(mapStateToProps)(ContactList);
