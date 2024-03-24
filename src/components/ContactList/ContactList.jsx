//імпорт CSS-модуля
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';

import { selectVisibleContacts } from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/contactsOps';

export default function ContactList() {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  //використання селектора для фільтрування контактів
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <div className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={handleDeleteContact}
        />
      ))}
    </div>
  );
}
