import { configureStore } from '@reduxjs/toolkit';
//npm install redux-persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import contactsReducer from './contactsSlice'; // Імпорт редюсера контактів
import filtersReducer from './filtersSlice'; // Імпорт редюсера фільтрів
import initialContacts from '../data/initialContacts.json'; // Імпорт [{},{},{}] масиву об`єктів з контактами

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'], // список властивостей із слайсу для збереження в localStorage
};

//config для слайсу contacts
const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

// початковий стан Redux для кореневого редюсера
const initialState = {
  contacts: {
    items: initialContacts,
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
      contacts: persistedContactsReducer, // передаємо новий reducer
      filters: filtersReducer, // Додавання редюсера фільтрів до слайсу filters
    },
  //========== Use with Redux-Persist: If using Redux-Persist, you should specifically ignore all the action types it dispatches ====//
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //========================= /  =====================================//
  preloadedState: initialState, // Початковий стан store
});

//persisting store
export const persistor = persistStore(store);
