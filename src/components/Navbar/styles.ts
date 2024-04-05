import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});

export const useStyles = {
  
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#F8F9FAFF',
    color: 'black',
    top: 0,
    width: '100%',
    height: '91px',
  } as React.CSSProperties,
  logo: {
    fontFamily: `${poppins}, poppins`,
    marginLeft: '41px',
    color: 'red',
  } as React.CSSProperties,
  search: { display: 'flex', alignItems: 'center' } as React.CSSProperties,
  register: {
    fontFamily: `${poppins}, poppins`,
    width: '93px',
    height: '52px',
    color: 'white',
    fontSize: '14px',
    background: 'black',
    opacity: 1,
    borderRadius: '12px',
  } as React.CSSProperties,
  login: {
    fontFamily: `${poppins}, poppins`,
    width: '77px',
    height: '52px',
    color: 'white',
    fontSize: '14px',
    background: 'red',
    opacity: 1,
    borderRadius: '12px',
  } as React.CSSProperties,
};
