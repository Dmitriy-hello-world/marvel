import { createSlice } from '@reduxjs/toolkit';

interface controlsInitialState {
  page: number;
}

const initialState: controlsInitialState = {
  page: 1,
};

const controlsSlice = createSlice({
  name: '@@controls',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;
