import { Box, TextField, Button, FormLabel } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useStyles } from './styles';

const Login = () => {
  const { root, textField, button } = useStyles;
  const [username, grabUsername] = useState('');
  const [password, grabPassword] = useState('');

  useEffect(() => {
    console.log('username', username);
    console.log('password', password);
  }, [username, password]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios
          .get('/login')
          .then((response) => grabUsername(response.data))
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <Box component="form" style={root}>
      <FormLabel sx={{ fontSize: '24px', textAlign: 'center' }}>Login</FormLabel>
      <TextField label="Username" style={textField} />
      <TextField label="Password" type="password" style={textField} />
      <Button style={button}>Login</Button>
    </Box>
  );
};

export default Login;
