// import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/actions';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = event => {
    const query = event.target.value;
    dispatch(filterContacts(query));
  };

  return (
    <>
      <label className={css.filter__label}>
        Find contacts by name
        <input
          className={css.filter__input}
          type="text"
          onChange={handleChange}
        ></input>
      </label>
    </>
  );
};

// Filter.propTypes = {
//   onChangeInputFilter: PropTypes.func.isRequired,
// };

export default Filter;
