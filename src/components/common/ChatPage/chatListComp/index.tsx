'use client';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import SendIcon from '@mui/icons-material/Send';
import SourceIcon from '@mui/icons-material/Source';
import StarIcon from '@mui/icons-material/Star';
import TagIcon from '@mui/icons-material/Tag';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import React, { useState, useCallback } from 'react';

export const ChatListComp = () => {
  const [open, setOpen] = useState<boolean>(true);

  const handleClick = useCallback(async () => {
    setOpen(!open);
  }, [open]);
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Categories
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="All Discussions" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <TagIcon />
        </ListItemIcon>
        <ListItemText primary="Tags" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SourceIcon />
        </ListItemIcon>
        <ListItemText primary="Resources" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AllInboxIcon />
        </ListItemIcon>
        <ListItemText primary="Off-Topic" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <CreditScoreIcon />
        </ListItemIcon>
        <ListItemText primary="Solved" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AlignHorizontalLeftIcon />
        </ListItemIcon>
        <ListItemText primary="Performance" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <BookmarksIcon />
        </ListItemIcon>
        <ListItemText primary="My Sports" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Basketball" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Football" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Soccer" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};
