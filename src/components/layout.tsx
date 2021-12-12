import { Container } from '@chakra-ui/layout';
import { Outlet } from 'react-router';
import { useAuth } from '../common';
import { AuthLayout } from '.';

export const Layout: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <AuthLayout />;
  }

  return (
    <Container p={0} maxW="container.lg">
      <Outlet />
    </Container>
  );
};
