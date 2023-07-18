// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

import css from './ContactListItem.module.css';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <li className={css.contact__item} key={contact.id}>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button
        className={css.contact__button}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

// ContactListItem.propTypes = {
//   contact: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default ContactListItem;
