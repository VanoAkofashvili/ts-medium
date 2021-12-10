import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../common/hooks';

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  console.log('Private route');
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
