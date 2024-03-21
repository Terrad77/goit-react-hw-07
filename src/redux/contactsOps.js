import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65fae8c23909a9a65b1bf52b.mockapi.i';

// отримання масиву контактів
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      //обробка помилок та надання резервного значення
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//  додавання нового контакту
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// видалення контакту по ID
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId; // Повертаємо ID видаленого контакту
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// оновлення контакту по ID
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (update, thunkAPI) => {
    try {
      const response = await axios.put(`/contacts/${update.id}`, update);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
