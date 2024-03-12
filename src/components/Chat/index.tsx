'use client';

import { Box } from '@mui/material';

import { useStyles } from './styles';

import { ChatListComp } from '../common/ChatPage/chatListComp';


export const ChatComp = () => {
    const { root } = useStyles;
  return <Box sx={root}><ChatListComp/></Box>;
};
