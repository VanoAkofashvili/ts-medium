import { Spinner, Center } from '@chakra-ui/react';
import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../common/hooks';

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  console.log('Private route');

  // Trying to fetch user information
  if (!user) {
    return (
      <Center h="100vh">
        <Spinner />
      </Center>
    );
  } else if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
