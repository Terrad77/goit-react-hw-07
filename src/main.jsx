import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // для зв'язати store з React компонентами App
import { PersistGate } from 'redux-persist/integration/react'; // using react, wrap your root component with PersistGate.
import App from './components/App/App';
import { persistor, store } from './redux/store'; // передамо в пропс для підключення Redux store до App
// Імпорт стилів нормалізації
import 'modern-normalize';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
