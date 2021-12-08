import { Container } from '@chakra-ui/layout';
import { Outlet } from 'react-router';

export const MainLayout: React.FC = () => {
  return (
    <Container p={0}>
      <Outlet />
    </Container>
  );
};
