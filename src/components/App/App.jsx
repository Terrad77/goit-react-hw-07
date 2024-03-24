import css from './App.module.css';
import { useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps.js';
import { Toaster } from 'react-hot-toast';
import Error from '../Error/Error.jsx';
import Loader from '../Loader/Loader.jsx';

export default function App() {
  // Отримання функції dispatch з Redux store
  const dispatch = useDispatch();
  const loading = useSelector(state => state.contacts.loading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    // запит (dispatch action) на сервер для отримання контактів.
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <Error errorMessage={`${error}`}> Error message: </Error>}
      {loading && <Loader>Loading message</Loader>}
      <ContactList />
    </div>
  );
}
