import { Container } from '@chakra-ui/layout';
import { Outlet, useLocation } from 'react-router';
import { useAuth } from '../common';
import { RoutePaths } from '../app/routes';
import { AuthLayout } from '.';

export const Layout: React.FC = () => {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) {
    return <AuthLayout />;
  }

  return (
    <Container p={0}>
      <Outlet />
    </Container>
  );
};
