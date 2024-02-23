export const useStyles = {
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    top: '154px',
    left: '45px',
    width: '538px',
    height: '591px',
    background: '#FFFFFFFF',
    borderRadius: '12px',
    boxShadow: '0px 0px 1px #171a1f, 0px 0px 2px #171a1f',
  },
  title: {
    position: 'absolute',
    top: '24px',
    left: '211px',
    fontFamily: 'Epilogue', // Heading
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: '48px',
    color: '#171A1FFF', // neutral-900
  },
  textBox: {
    position: 'absolute',
    top: '92px',
    left: '28px',
    opacity: 1,
  },

  textBoxInput: {
    width: '231px',
    height: '36px',
    paddingLeft: '12px',
    paddingRight: '12px',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '22px',
    background: '#F3F4F6FF',
    borderRadius: '12px',
    borderWidth: '0px',
    outline: 'none',
  },

  textBoxLabel: {
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: '20px',
  },

  textBoxInputHover: {
    '&:hover': {
      color: '#BDC1CAFF',
      background: '#F3F4F6FF',
    },
  },

  textBoxInputFocus: {
    '&:focus': {
      color: '#BDC1CAFF', // neutral-400
      background: '#FFFFFFFF', // white
    },
  },

  textBoxInputDisabled: {
    '&:disabled': {
      color: '#BDC1CAFF', // neutral-400
      background: '#F3F4F6FF', // neutral-200
    },
  },
};
