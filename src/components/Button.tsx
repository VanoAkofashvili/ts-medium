import { Button as Btn, ButtonProps } from '@chakra-ui/react';

const Button: React.FC<ButtonProps> = ({ children, ...btnProps }) => {
  return (
    <Btn colorScheme="facebook" {...btnProps}>
      {children}
    </Btn>
  );
};

export { Button };
