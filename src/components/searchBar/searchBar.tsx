import SearchIcon from '@mui/icons-material/Search';
import { Box, TextField } from '@mui/material';
import doctorImg from '../../assets/docs-bg.jpg';
// import { useState } from 'react';
import './searchBar.modules.scss';

export const SearchBar = () => {
  //   const [value, setValue] = useState('');

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
        />
      </Box>
      <img src={doctorImg} alt="doctor" className="img" />
    </div>
  );
};
