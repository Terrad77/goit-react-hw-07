import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.wraper}>
      Loading contacts
      <div className={css.loader}></div>
    </div>
  );
}
