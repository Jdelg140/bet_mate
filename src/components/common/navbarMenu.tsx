'use client';

import { Box, Link } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useCallback } from 'react';

export const NavbarMenu = () =>{
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

    const handleClick = useCallback(
      async (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      },
      [],
    );
  const handleClose = useCallback(async () => {
    setAnchorEl(null);
  }, []);

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/" target="_blank" rel="noreferrer">
            Home
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/chat" target="_blank" rel="noreferrer">
            Chat Room
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/stats" target="_blank" rel="noreferrer">
            Player Stats
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/profile" target="_blank" rel="noreferrer">
            Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/logout" target="_blank" rel="noreferrer">
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
}
