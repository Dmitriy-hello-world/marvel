import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MarvelApiResponse } from '../../types/charactersTypes';
import { Extra, Status } from '../../types/reduxPropsTypes';

export const loadCharacters = createAsyncThunk<
  { data: MarvelApiResponse },
  {
    page: number;
    search: {
      previous: string;
      current: string;
    };
  },
  {
    extra: Extra;
    state: { characters: CharactersSlice };
    rejectValue: string;
  }
>(
  '@@characters/load-characters',
  async ({ page, search }, { extra: { client, api }, rejectWithValue }) => {
    try {
      if (search.current.length > 0) {
        return client.get(
          api.generateUrl(api.GET_CHARACTERS, page, search.current)
        );
      } else {
        return client.get(api.generateUrl(api.GET_CHARACTERS, page, null));
      }
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('Unknown error');
      }
    }
  }
);

interface CharactersSlice {
  status: Status;
  error: string | null;
  characters: MarvelApiResponse | null;
}

const initialState: CharactersSlice = {
  status: 'idle',
  error: null,
  characters: null,
};

const characterSlice = createSlice({
  name: '@@characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCharacters.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCharacters.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'unknown error';
      })
      .addCase(loadCharacters.fulfilled, (state, action) => {
        state.status = 'received';
        state.characters = action.payload.data;
      });
  },
});

export const CharactersReducer = characterSlice.reducer;
