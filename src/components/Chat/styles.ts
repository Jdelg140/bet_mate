import { breakpoints } from "@/utils/breakpoints";

export const useStyles = {
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  listContainer: {
    width: '40%',
    display: 'flex',
    [`@media(max-width: ${breakpoints.md}px)`]: {
      paddingTop: '2rem',
      flexDirection: 'column',
      gap: '3rem',
      height: 'auto',
    },
  },
};
