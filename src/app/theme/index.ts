import { extendTheme, theme as base } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import {
  ButtonStyles as Button,
  ContainerStyles as Container,
  DividerStyles as Divider,
} from './components';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '56em', // about 900px
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
});

const theme = extendTheme({
  colors: {
    facebook: {
      transparent: 'transparent',
      background: '#f0f2f5',
      primary: '#1877f2',
      secondary: '#42b72a',
      white: '#fff',
      focus: '#1877f2',
    },
  },
  fonts: {
    body: `SFProDisplay-Regular, Helvetica, ${base.fonts.body}`,
  },
  components: {
    Button,
    Container,
    Divider,
  },
  styles: {
    global: {
      body: {
        bg: 'facebook.background',
      },
    },
  },

  breakpoints,
});

export default theme;
