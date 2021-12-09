import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router';

const AuthLayout: React.FC = () => {
  return (
    <Box
      maxW="container.xl"
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
