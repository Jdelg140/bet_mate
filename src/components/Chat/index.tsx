'use client';

import { Box } from '@mui/material';

import { useStyles } from './styles';

import { ChatListComp } from '@/components/common/ChatPage/chatListComp';

export const ChatComp = () => {
  const { root, mainContainer, listContainer } = useStyles;
  return (
    <Box sx={root}>
      <Box sx={mainContainer}>
        <Box></Box>
        <Box sx={listContainer}>
          <ChatListComp />
        </Box>
      </Box>
    </Box>
  );
};
