import { createSelector, createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOps';
import { selectNameFilter } from './filtersSlice';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false, //оновлення редюсера контактів для обробки завантаження
    error: null, //оновлення редюсера контактів для обробки помилок
  },
  //обробка  екшенів (fulfilled, rejected, pending) та зміна даних у стані
  extraReducers: builder => {
    builder
      // Обробка результатів операції fetchContacts
      .addCase(fetchContacts.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Обробка результатів операції addContact
      .addCase(addContact.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Обробка результатів операції deleteContact
      .addCase(deleteContact.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectContacts = state => state.contacts.items; // функція-селектор для useSelector, повертає список контактів з властивості items.
// Використовуємо createSelector для мемоізації
export const selectVisibleContacts = createSelector(
  // Перший аргумент - селектор для вибору усіх контактів, Другий аргумент - селектор для вибору фільтра
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// експорт редюсер, екшени і селектори.

// export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
