'use client';
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
import { ProfileComp } from '../Profile';
import { useRouter } from 'next/navigation';

export const NavbarComp = () => {
  const { root, logo, login, register, search } = useStyles;
  const router = useRouter();
  const handleHome = (e: any) => {
    e.preventDefault();
    router.push('/');
  };
  const handleRegister = (e: any) => {
    e.preventDefault();
    router.push('/register');
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    router.push('/login');
  };
  return (
    <Box style={root}>
      <Button style={logo} onClick={handleHome}>
        Bet Buddy
      </Button>
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
        <ProfileComp />
        <Button style={register} onClick={handleRegister}>
          Register
        </Button>
        <Button style={login} onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
};
