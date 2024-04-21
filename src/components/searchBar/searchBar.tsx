import SearchIcon from '@mui/icons-material/Search';
import { Box, TextField } from '@mui/material';
import doctorImg from '../../assets/docs-bg.jpg';
import marvelImg from '../../assets/marvel_logo.png';
import { useAppDispatch } from '../../app/store';
import { setPage, setSearch } from '../controls/controlsSlice';
import { useSelector } from 'react-redux';
import { selectControlInfo } from '../controls/controlsSelectors';
import './searchBar.modules.scss';

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { search } = useSelector(selectControlInfo);
  const onHandleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(
      setSearch({
        previous: search.current,
        current: e.target.value,
      })
    );
    dispatch(setPage(1));
  };

  return (
    <div className="wrapper">
      <Box
        className="search_position"
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          m: '20px auto',
          justifyContent: 'center',
        }}
      >
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          sx={{ width: '400px' }}
          id="input-with-sx"
          label="Find character"
          variant="standard"
          value={search.current}
          onChange={onHandleChange}
        />
      </Box>
      <img src={`.${marvelImg}`} alt="marvel logo" className="img__marvel" />
      <img src={`.${doctorImg}`} alt="doctor" className="img" />
    </div>
  );
};
