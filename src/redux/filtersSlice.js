// У файлі filtersSlice.js оголоси слайс фільтра, використовуючи функцію createSlice().
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // Екшени слайса для використання в dispatch:
    // changeFilter - зміна значення фільтра в властивості name
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

//експорт редюсер, а також його екшени і селектори.

export const selectNameFilter = state => state.filters.name; //функція-селектор для використання в useSelector: selectNameFilter - повертає значення фільтра з властивості name

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
