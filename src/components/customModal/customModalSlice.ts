import { createSlice } from '@reduxjs/toolkit';
import { Character } from '../../types/charactersTypes';

interface customModalInitialState {
  open: boolean;
  currentCharacter: Character | null;
}

const initialState: customModalInitialState = {
  open: false,
  currentCharacter: null,
};

const modalSlice = createSlice({
  name: '@@modal',
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setCharacter: (state, action) => {
      state.currentCharacter = action.payload;
    },
  },
});

export const { setOpen, setCharacter } = modalSlice.actions;
export const characterReducer = modalSlice.reducer;
