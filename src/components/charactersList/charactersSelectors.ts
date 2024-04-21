import { RootState } from '../../app/store';

export const selectCharactersInfo = (state: RootState) => ({
  status: state.characters.status,
  error: state.characters.error,
  total: state.characters.characters?.data.total,
  count: state.characters.characters?.data.count,
});

export const selectAllCharacters = (state: RootState) =>
  state.characters.characters?.data.results;
