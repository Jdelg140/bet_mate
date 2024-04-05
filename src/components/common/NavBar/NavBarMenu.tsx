'use client';

import MenuIcon from '@mui/icons-material/Menu';
import { Box, Link } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useCallback } from 'react';

import { useStyles } from './styles';

export const NavbarMenu = () =>{
  const { burger, tabs} = useStyles;
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
        <MenuIcon style={burger} />
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
          <Link style={tabs} href="/" rel="noreferrer">
            Home
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link style={tabs} href="/chat" rel="noreferrer">
            Chat Room
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link style={tabs} href="/stats" rel="noreferrer">
            Player Stats
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link style={tabs} href="/profile" rel="noreferrer">
            Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link style={tabs} href="/logout" rel="noreferrer">
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
}
