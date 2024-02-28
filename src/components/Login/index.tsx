import { Box } from '@mui/material';
import React from 'react';

import { useStyles } from './styles';

export const LoginComp = () => {
  const { root, container, textBox } = useStyles;
  return (
    <Box sx={root}>
      <Box sx={container}>
        <Box sx={textBox}></Box>
      </Box>
    </Box>
  );
};
