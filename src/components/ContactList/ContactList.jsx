//імпорт CSS-модуля
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filtersSlice';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  // Отримання значення фільтру з Redux store
  const filter = useSelector(selectNameFilter);
  // Отримання усіх контактів з Redux store
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  // Фільтруємо контакти перед їх відображенням
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
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
