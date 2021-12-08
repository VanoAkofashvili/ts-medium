import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router';
import { Logo } from '../common';

const AuthLayout: React.FC = () => {
  return (
    <Box
      maxW="container.lg"
      m="auto"
      h="100vh"
      d="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Outlet />
    </Box>
  );
};

export { AuthLayout };
