import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';

import { NavbarMenu } from '../common/NavBar/navbarMenu';

import { useStyles } from './styles';

export const NavbarComp = () => {
  const { root, logo, login, register, search } = useStyles;
  return (
    <Box style={root}>
      <NavbarMenu />
      <Typography style={logo}>
        <h1>Bet Buddy</h1>
      </Typography>
      <Box style={search}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="searchBar">Search</InputLabel>
          <OutlinedInput
            id="searchBar"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            label="Search"
          />
        </FormControl>
      </Box>
      <Box sx={{ display: 'flex', gap: '20px', marginRight: '41px', alignItems: 'center' }}>
        <Button style={register}>
          <h5>Register</h5>
        </Button>
        <Button style={login}>
          <h5>Login</h5>
        </Button>
      </Box>
    </Box>
  );
};
