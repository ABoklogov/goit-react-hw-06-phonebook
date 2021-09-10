import { connect } from 'react-redux';
import * as action from '../../../redux/contacts/contacts-action';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <>
      <p className={s.contactName}>{name}:</p>
      <p className={s.contactNumber}>{number}</p>
      <button className={s.contactBtn} onClick={() => deleteContact(id)}>
        delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(action.deleteContact(id)),
  };
};
export default connect(undefined, mapDispatchToProps)(ContactItem);
