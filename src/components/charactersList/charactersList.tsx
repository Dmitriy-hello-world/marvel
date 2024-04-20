import { Box } from '@mui/material';
import { useCharacters } from './useCharacters';

export const CharacterList = () => {
  const [characters, { status, error, total, count }] = useCharacters();
  console.log(characters?.thumbnail.path);
  console.log(status);
  console.log(error);
  console.log(total);
  console.log(count);
  return (
    <Box>
      <div>character list</div>
    </Box>
  );
};
