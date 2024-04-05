import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});

export const useStyles = {
  
  root: {
    display: 'flex',
    alignItems: 'center',
    background: '#F8F9FAFF',
    top: 0,
    width: '100%',
    height: '6rem',
    padding: '0 2rem',
  } as React.CSSProperties,
     container: {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    alignItems: 'center',
    width: '80%',
  },
  logo: {
    fontFamily: `${poppins}, poppins`,
       fontSize: '25px',
    color: '#E05858FF',
  }as React.CSSProperties,
  search: { 
    display: 'flex', 
    // alignItems: 'center' 
  },
  register: {
    fontFamily: `${poppins}, poppins`,
    width: '7.5rem',
    height: '3.5rem',
    color: '#FFF',
    fontSize: '14px',
    background: 'black',
    opacity: 1,
    borderRadius: '0.8rem',
  },
  login: {
    fontFamily: `${poppins}, poppins`,
    width: '7.5rem',
    height: '3.5rem',
    color: '#FFF',
    fontSize: '14px',
    background: '#E05858FF',
    opacity: 1,
    borderRadius: '0.8rem',
  },
 
};
