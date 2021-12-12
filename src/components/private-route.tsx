import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../common/hooks';

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  console.log('Private route');

  if (!user) return <Navigate to="/login" state={{ from: location }} />;
  return children;
};
