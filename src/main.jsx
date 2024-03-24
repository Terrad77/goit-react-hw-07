import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // для зв'язку store з React компонентами App
import App from './components/App/App';
import { store } from './redux/store'; // { persistor, store } передамо в пропс для підключення Redux store до App
// Імпорт стилів нормалізації
import 'modern-normalize';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
