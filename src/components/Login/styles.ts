export const useStyles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  } as React.CSSProperties,

  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    gap: '1rem',
    width: '60%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FFFFFFFF',
    borderRadius: '24px',
    boxShadow: '0px 0px 1px #171a1f',
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    gap: '1rem',
  },

  linkBox: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    gap: '10%',
  },

  textStyles: {
    fontFamily: 'Epilogue',
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: '48px',
    color: '#171A1FFF',
  },

  textBoxStyles: {
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: 400,
  },

  button: {
    width: '70%',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFFFF',
    background: '#E05858FF',
    border: 'none',
    borderRadius: '12px',
  } as React.CSSProperties,

  linkText: {
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '22px',
    color: '#E05858FF',
    textDecoration: 'none',
  },
};
