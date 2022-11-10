import { createSlice } from '@reduxjs/toolkit';

const filterInitialSate = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialSate,
  reducers: {
    changeFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;
