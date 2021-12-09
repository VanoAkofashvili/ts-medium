import { darken, mode, whiten } from '@chakra-ui/theme-tools';

export const ButtonStyles = {
  baseStyle: {
    color: 'facebook.white',
    letterSpacing: '1.1px',
  },
  variants: {
    primary: (props: any) => ({
      bg: 'facebook.primary',
      color: 'facebook.white',
      _hover: {
        bg: mode(
          darken('facebook.primary', 10),
          whiten('facebook.primary', 10)
        )(props),
      },
    }),
    secondary: (props: any) => ({
      bg: 'facebook.secondary',
      _hover: {
        bg: mode(
          darken('facebook.secondary', 10),
          whiten('facebook.secondary', 10)
        )(props),
      },
    }),
  },
  defaultProps: {},
};
