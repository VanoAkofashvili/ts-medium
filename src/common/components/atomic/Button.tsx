import { Button as Btn, ButtonProps } from '@chakra-ui/react';

export interface ButtonColorMode {
  colorMode: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps & Partial<ButtonColorMode>> = ({
  children,
  ...buttonProps
}) => {
  return (
    <Btn isFullWidth {...buttonProps}>
      {children}
    </Btn>
  );
};

export { Button };
