import css from './Error.module.css';

export default function Error({ errorMessage, children }) {
  return (
    <div className={css.container}>
      <p className={css.text}>
        <b>{children}</b>
      </p>
      {errorMessage}
    </div>
  );
}
