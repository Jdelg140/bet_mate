import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

import { CHATROOMTITLES } from '@/constants/NavBarConst';

export const ChatListComp = () => {

        return (
            <Box>
                {CHATROOMTITLES.map(
                    (title: string, index: number) => (
                        <ListItemButton key={index}>
                            <ListItemIcon>
                                {/* <SendIcon /> */}
                            </ListItemIcon>
                            <ListItemText primary={title} />
                        </ListItemButton>
                    ),
                )}
            </Box>
        );
}
