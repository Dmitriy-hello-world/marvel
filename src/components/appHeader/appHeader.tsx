import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ApiIcon from '@mui/icons-material/Api';
import { Link, NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import './appHeader.modules.scss';
import { useState } from 'react';

export const AppHeader = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <AppBar color="error" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ApiIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Link
            className="appHeader__logoLink"
            to="/marvel/"
            onClick={() => setIsActive(0)}
          >
            <Typography
              variant="h6"
              noWrap
              component="span"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MARVEL API
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: 'flex', ml: '20px' }}>
            <NavLink
              to="/marvel/"
              onClick={() => setIsActive(0)}
              className={
                isActive === 0
                  ? 'appHeader__button_active'
                  : 'appHeader__button'
              }
            >
              <Button
                key={'1'}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
            </NavLink>
            <NavLink
              to="/marvel/about"
              onClick={() => setIsActive(1)}
              className={
                isActive === 1
                  ? 'appHeader__button_active'
                  : 'appHeader__button'
              }
            >
              <Button
                key={'2'}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                About Me
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
