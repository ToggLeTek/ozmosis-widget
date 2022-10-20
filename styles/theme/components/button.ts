/* Defining the default options for buttons */
const Button = {
    baseStyle: {
        fontFamily: 'Gentium Plus', // TODO: This font must be yeeted.
        fontWeight: '400',
        bg: 'brand.pacific.0',
        borderRadius: '0.8rem',
        transition: 'all .3s ease-in-out',
        _hover: {
          opacity: 0.9
        },
        boxShadow: 'dark-lg',
      },
      variants: {
        'amt-mid': {
          borderRadius: '0.25rem',
          fontSize: '0.95rem',
          m: '0.5',
          p: '0.5',
          h: 'fit',
          _hover : {
            fontWeight: 700,
            bg: 'brand.pacific.900',
            textColor: 'brand.pacific.0',
            boxShadow: 'base'
          }
        },
        'amt-left': {
          borderRightRadius: '0.25rem',
          borderBottomLeftRadius: '0.15rem',
          fontSize: '0.95rem',
          m: '0.5',
          p: '0.5',
          h: 'fit',
          _hover : {
            fontWeight: 700,
            bg: 'brand.pacific.900',
            textColor: 'brand.pacific.0',
            boxShadow: 'base'
          }
        },
        'amt-right': {
          borderLeftRadius: '0.25rem',
          borderTopRightRadius: '0.15rem',
          fontSize: '0.95rem',
          m: '0.5',
          p: '0.5',
          h: 'fit',
          _hover : {
            fontWeight: 700,
            bg: 'brand.pacific.900',
            textColor: 'brand.pacific.0',
            boxShadow: 'base'
          }
        },
    },
};

/* Exporting the Button object. */
export default Button;