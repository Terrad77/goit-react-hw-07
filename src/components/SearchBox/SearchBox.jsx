import css from './SearchBox.module.css';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice'; // Імпорт екшена зміни фільтра

//Поле пошуку – це інпут без форми, значення якого записується у стан контрольований елемент,
//передаємо value -  значення стану, onChange -  (refactoring ) dispatch екшену зміни фільтра
export default function SearchBox() {
  const dispatch = useDispatch(); // Отримання функції dispatch з Redux store
  const nameFieldId = useId();

  // Отримання поточного значення свойства name из слайса filters з Redux store
  const filterValue = useSelector(state => state.filters.name);

  const handleChange = newValue => {
    dispatch(changeFilter(newValue)); // Відправка екшену зміни фільтра
  };

  return (
    <div className={css.wraper}>
      <label
        className={css.label}
        htmlFor={nameFieldId}
        aria-labelledby="searchLabel"
      >
        Find contacts by name
      </label>
      <input
        className={css.field}
        type="text"
        name="name"
        id={nameFieldId}
        value={filterValue}
        onChange={e => handleChange(e.target.value)}
      />
    </div>
  );
}
