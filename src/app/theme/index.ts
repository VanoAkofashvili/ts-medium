import { extendTheme, theme as base } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { ButtonColorMode } from '../../common/components/atomic/Button';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '56em', // about 900px
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
});

const Button = {
  baseStyle: {
    fontSize: 'xl',
    padding: '0 16px',
    lineHeight: '48px',
    height: '48px',
    borderRadius: '6px',
    color: 'facebook.white',
  },

  variants: {
    solid: (props: ButtonColorMode) => ({
      bg: props.colorMode === 'secondary' ? 'facebook.green' : 'facebook.blue',
    }),
  },
  defaultProps: {
    size: 'xl',
    variant: 'solid',
  },
};

const Container = {
  baseStyle: {
    bg: 'transparent',
  },
  variants: {
    card: {
      bg: 'facebook.white',
      p: '20px',
      border: 'none',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)',
    },
  },
};

const theme = extendTheme({
  colors: {
    facebook: {
      transparent: 'transparent',
      background: '#f0f2f5',
      blue: '#1877f2',
      green: '#42b72a',
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
  },
  styles: {
    global: {
      body: {
        bg: 'facebook.background',
      },
    },
  },
  sizes: {
    ...base.space,
  },
  breakpoints,
});

export default theme;
