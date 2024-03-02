import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

import { useStyles } from './styles';

export const LoginComp = () => {
  const { root, container, formContainer, linkBox, textStyles, button, linkText } = useStyles;
  return (
    <Box sx={root}>
      <Box sx={container}>
        <Box sx={textStyles}>Login</Box>
        <Box sx={formContainer}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
            <Input id="input-with-icon-adornment" />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
            <Input
              id="input-with-icon-adornment"
              // type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                  >
                    {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Box sx={linkBox}>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: '#E05858FF',
                  '&.Mui-checked': {
                    color: '#E05858FF',
                  },
                }}
                defaultChecked
              />
            }
            label="Remember Me"
          />
          <Link style={linkText} href={''}>
            Forgot Password?
          </Link>
        </Box>
        <Button variant="contained" style={button}>
          Login
        </Button>
      </Box>
    </Box>
  );
};
