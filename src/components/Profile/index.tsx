/* eslint-disable react/jsx-no-bind */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import { useStyles } from './styles';

export const ProfileComp = () => {
  const { modal, profileNav, information } = useStyles;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button onClick={handleOpen}>Your Profile</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={modal}>
          <Box sx={profileNav}>
            <Typography variant="h4" component="h2">
              Profile
            </Typography>
            <Typography variant="h4" component="h2">
              Settings
            </Typography>
            <Typography variant="h4" component="h2">
              Logout
            </Typography>
          </Box>
          <Box sx={information}>
            <Typography id="keep-mounted-modal-title" variant="h2" component="h2">
              Your Profile
            </Typography>
            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
