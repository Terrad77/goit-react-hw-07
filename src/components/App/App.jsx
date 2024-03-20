import css from './App.module.css';
// import initialContacts from '../../data/initialContacts.json';
// import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  addContact,
  deleteContact,
} from '../../redux/contactsSlice.js';
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';

//=======      refactoring     ======================//
//ф-ція що зчитує значення localStorage
// const getInitialContacts = () => {
//   const savedContacts = window.localStorage.getItem('contacts');
//   // если (savedContacts есть)getItem не вернет ноль, то истина: JSON.parse() для преобразования JSON  в объект, если ложь:
//   return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
// };
//=======     / refactoring     ======================//

export default function App() {
  //=======      refactoring     ======================//
  // //Оголошуємо стани
  // const [contacts, setContacts] = useState(getInitialContacts); // початковий стан контактів
  // const [filter, setFilter] = useState(''); // початковий стан фільтра пошуку SearchBox

  // // змінна де зберігаємо відфільтровані контакти не записуючи в стан, пропс до ContactList
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  // // для колекції елементів використовують функціональну форму сеттеру!
  // // ф-ція повертає змінений стану контактів (додавання)
  // const addContact = newContact => {
  //   setContacts(prevContacts => {
  //     return [...prevContacts, newContact];
  //   });
  // };

  // // ф-ція повертає змінений стану контактів (видалення)
  // const deleteContact = contactId => {
  //   setContacts(prevContacts => {
  //     return prevContacts.filter(contact => contact.id !== contactId);
  //   });
  // };
  //=======     / refactoring     ======================//

  // Отримання стану контактів з Redux store
  const contacts = useSelector(selectContacts);

  // Отримання фільтру з Redux store
  const filter = useSelector(selectNameFilter);

  // Отримання функції dispatch з Redux store
  const dispatch = useDispatch();

  // Збереження контактів у локальному сховищі при зміні станів
  // useEffect(() => {
  //   try {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   } catch (error) {
  //     console.error('Error storing contacts or filter in localStorage:', error);
  //   }
  // }, [contacts]);

  // const handleAddContact = newContact => {
  //   dispatch(addContact(newContact));
  // };

  // const handleDeleteContact = contactId => {
  //   dispatch(deleteContact(contactId));
  // };

  // const handleFilterChange = value => {
  //   dispatch(changeFilter(value));
  // };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
