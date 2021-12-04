import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router';

const AuthLayout: React.FC = () => {
  return (
    <Container p={5}>
      <Outlet />
    </Container>
  );
};

export { AuthLayout };
