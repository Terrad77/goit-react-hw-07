// import { useEffect, useState } from 'react';
import css from './Error.module.css';

export default function Error({ errorMessage, children }) {
  // const [displayMessage, setDisplayMessage] = useState('');

  // useEffect(() => {
  //   if (errorMessage) {
  //     let index = 0;
  //     const interval = setInterval(() => {
  //       if (index < errorMessage.length) {
  //         setDisplayMessage(prevMessage => prevMessage + errorMessage[index]);
  //         index++;
  //       } else {
  //         // clearInterval(interval);
  //         setDisplayMessage(''); // Очистить сообщение, если errorMessage становится fals
  //       }
  //     }, 100); // Интервал времени между выводом букв (в миллисекундах)

  //     return () => clearInterval(interval);
  //   }
  // }, [errorMessage]);

  return (
    <div className={css.container}>
      <p className={css.text}>
        <b>{children}</b>
      </p>
      {errorMessage}
    </div>
  );
}
