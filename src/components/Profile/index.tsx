import { Box } from '@mui/material';

import { useStyles } from './styles';

export const ProfileComp = () => {
  const { root } = useStyles;
  return (
    <Box sx={root}>
      <h1>Profile</h1>
    </Box>
  );
};
