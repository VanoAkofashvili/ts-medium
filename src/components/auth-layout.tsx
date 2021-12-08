import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router';

const AuthLayout: React.FC = () => {
  return (
    <Container maxW="container.sm">
      <Outlet />
    </Container>
  );
};

export { AuthLayout };
