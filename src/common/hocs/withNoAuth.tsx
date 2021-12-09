import { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import { RoutePaths } from '../../app/routes';
import { useAuth } from '../hooks';

// Don't render component when user is logged in (login, register page)
export function withNoAuth<T>(Component: ComponentType<T>) {
  return (props: T) => {
    const { user } = useAuth();

    if (user) return <Navigate to={RoutePaths.home} />;

    return <Component {...props} />;
  };
}
