import { connect } from 'react-redux';
import * as action from '../../redux/contacts/contacts-action';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, chengeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={e => chengeFilter(e)}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  chengeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    chengeFilter: e => dispatch(action.chengeFilter(e)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
