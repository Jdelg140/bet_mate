import React from 'react'
import { useStyles } from './styles';
import { Box } from '@mui/material';

const login = () => {
    const { root, container, textBox } = useStyles;
  return (
    <Box sx={root}><Box sx={container}><Box sx={textBox}></Box></Box></Box>
  )
}

export default login