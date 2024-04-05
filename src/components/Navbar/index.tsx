/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { useRouter } from 'next/navigation';

import { ProfileComp } from '../Profile';
import { NavbarMenu } from '../common/NavBar/NavBarMenu';

import { useStyles } from './styles';

export const NavbarComp = () => {
  const { root, logo, login, register,container, search } = useStyles;
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
      <Box sx={container}>
        <NavbarMenu />
        <Box>
        <Button style={logo} onClick={handleHome}>
          Bet Buddy
        </Button>
        </Box>
      </Box>
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
