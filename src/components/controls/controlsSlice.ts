import { createSlice } from '@reduxjs/toolkit';

interface controlsInitialState {
  page: number;
  search: {
    previous: string;
    current: string;
  };
}

const initialState: controlsInitialState = {
  page: 1,
  search: {
    previous: '',
    current: '',
  },
};

const controlsSlice = createSlice({
  name: '@@controls',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setPage, setSearch } = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;
