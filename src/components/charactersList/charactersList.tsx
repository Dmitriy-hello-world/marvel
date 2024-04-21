import { Box, List, Pagination } from '@mui/material';
import { useCharacters } from './useCharacters';
import { CharacterListItem } from '../characterListItem/characterListItem';
import { useAppDispatch } from '../../app/store';
import { setPage } from '../controls/controlsSlice';
import './charactersList.modules.scss';

export const CharacterList = () => {
  const dispatch = useAppDispatch();
  const [characters = [], { status, error, total = 0, page }] = useCharacters();
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
  };

  return (
    <Box className="cards_centered">
      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}

      {status === 'received' && (
        <List className="cards__wrapper">
          {characters.map((c) => {
            return <CharacterListItem key={c.id} character={c} />;
          })}
        </List>
      )}
      <Pagination
        color="primary"
        count={(total - (total % 20)) / 20 + 1}
        page={page}
        onChange={handleChange}
        className="paginator__position"
      />
    </Box>
  );
};
