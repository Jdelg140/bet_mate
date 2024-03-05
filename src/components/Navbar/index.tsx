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

import { useStyles } from './styles';

export const NavbarComp = () => {
  const { root, logo, login, register, search } = useStyles;
  return (
    <Box style={root}>
      <Typography style={logo}>Bet Buddy</Typography>
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
        <Button style={register}>Register</Button>
        <Button style={login}>Login</Button>
      </Box>
    </Box>
  );
};
