import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice'; // Імпорт редюсера контактів
import filtersReducer from './filtersSlice'; // Імпорт редюсера фільтрів

// початковий стан Redux для кореневого редюсера
const initialState = {
  // зміни форму стану слайсу контактів, додавши властивості loading та error.
  contacts: {
    items: [], // Початково список контактів пустий
    loading: false, // Індикатор завантаження (за замовчуванням - вимкнений)
    error: null, // Початково помилок немає
  },
  filters: {
    name: '',
  },
};

// create store
export const store = configureStore({
  reducer:
    //об'єкт стану
    {
      contacts: contactsReducer, // передаємо редюсер контактів
      filters: filtersReducer, // Додавання редюсера фільтрів до слайсу filters
    },
  preloadedState: initialState, // Початковий стан store
});
