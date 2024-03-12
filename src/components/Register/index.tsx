'use client';
import { Box, TextField, Button, FormLabel } from '@mui/material';
import React, { useState } from 'react';

import { useStyles } from './styles';

export const RegisterComp = () => {
  const { root, textField, button } = useStyles;
  const [register, setRegister] = useState({
    team: '',
    username: '',
    email: '',
    password: '',
  });

  const handleRegister = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(register),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setRegister((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Box component="form" style={root}>
      <FormLabel sx={{ fontSize: '24px', textAlign: 'center' }}>Register</FormLabel>
      <TextField
        label="Team"
        name="team"
        value={register.team}
        onChange={handleChange}
        style={textField}
      />
      <TextField
        label="Username"
        name="username"
        value={register.username}
        onChange={handleChange}
        style={textField}
      />
      <TextField
        label="Email"
        name="email"
        value={register.email}
        onChange={handleChange}
        style={textField}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={register.password}
        onChange={handleChange}
        style={textField}
      />
      <Button style={button} onClick={handleRegister}>
        Register
      </Button>
    </Box>
  );
};
