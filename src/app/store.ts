import axios from 'axios';
import * as api from '../consts/config';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { CharactersReducer } from '../components/charactersList/charactersSlice';
import { controlsReducer } from '../components/controls/controlsSlice';
import { characterReducer } from '../components/customModal/customModalSlice';

export const store = configureStore({
  reducer: {
    characters: CharactersReducer,
    controls: controlsReducer,
    modal: characterReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
