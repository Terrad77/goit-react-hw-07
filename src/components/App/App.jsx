import css from './App.module.css';
import { useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';

import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps.js';
import Loader from '../Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
  // Отримання функції dispatch з Redux store
  const dispatch = useDispatch();

  useEffect(() => {
    // запит (dispatch action fetchContacts() ) на сервер для отримання контактів.
    dispatch(fetchContacts())
      .then(() => {
        toast.success('Contacts fetched successfully ', {
          icon: '👍',
          style: { gap: '5px' },
        });
      })
      .catch(error => {
        toast.error('Failed to fetch contacts: '(error.message));
      });
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <Loader />
      <ContactList />
    </div>
  );
}
