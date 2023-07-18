// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ContactListItem from 'components/ContactListItem/ContactListItem';

import css from './ComtactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);

  const filters = useSelector(state => state.filters.filters);
  console.log(filters);

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters)
    );
  };

  const renderContacts = filteredContacts();

  return (
    <div className={css.contact__container}>
      <ul className={css.contact__list}>
        {renderContacts.map(contact => (
          <ContactListItem
            contact={contact}
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </ul>
    </div>
  );
};

// ContactList.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
// };

export default ContactList;
