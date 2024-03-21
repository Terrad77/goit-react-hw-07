import css from './LoaderSpiner.module.css';

export default function Loader() {
  return (
    <div className={css.wraper}>
      Loading contacts
      <div className={css.loader}></div>
    </div>
  );
}
