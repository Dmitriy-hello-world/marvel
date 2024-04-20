import { CharacterList } from '../../components/charactersList/charactersList';
import { SearchBar } from '../../components/searchBar/searchBar';

export const HomePage = () => {
  return (
    <>
      <SearchBar />
      <CharacterList />
    </>
  );
};
