import { Box, Button, MenuItem, TextField } from '@mui/material';

import { useStyles } from './styles';

export const CreateTeamComp = () => {
  const { root } = useStyles;
  return (
    <Box sx={root}>
      <h1>Create Team</h1>
      <TextField
        id="point-guard"
        select
        label="Select"
        defaultValue="PG"
        helperText="Please pick your point guard"
      >
        <MenuItem></MenuItem>
      </TextField>
      <TextField
        id="small-forward"
        select
        label="Select"
        defaultValue="PG"
        helperText="Please pick your small forward"
      >
        <MenuItem></MenuItem>
      </TextField>
      <TextField
        id="shooting-guard"
        select
        label="Select"
        defaultValue="PG"
        helperText="Please pick your shooting guard"
      >
        <MenuItem>dick</MenuItem>
      </TextField>
      <TextField
        id="power-forward"
        select
        label="Select"
        defaultValue="PG"
        helperText="Please pick your power foward"
      >
        <MenuItem></MenuItem>
      </TextField>
      <TextField
        id="center"
        select
        label="Select"
        defaultValue="PG"
        helperText="Please pick your center"
      >
        <MenuItem></MenuItem>
      </TextField>
      <Button>Create Team</Button>
    </Box>
  );
};
