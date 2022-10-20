/* Importing the extendTheme function from the chakra-ui library. */
import { extendTheme } from '@chakra-ui/react';

/**
 * Importing the custom theme foundations.
 * Foundations are things like: Shadows, colors, breakpoints, etc. */
import colors from './foundations/colors';
import breakPoints from './foundations/breakPoints';
import shadows from './foundations/shadows';

/** 
 * Importing the custom styled components.
 * (https://chakra-ui.com/docs/components) */
import Heading from './components/heading';
import Text from './components/text';
import Button from './components/button';

/* Extending the default theme with the custom theme objects. */
const defaultThemeObject = {
    // Foundations
    colors,
    breakPoints,
    shadows,

    // Components
    components: {
      Heading,
      Text,
      Button,
    },
  }
  
/* Extending the default theme with the custom theme object. */
export default extendTheme(defaultThemeObject)