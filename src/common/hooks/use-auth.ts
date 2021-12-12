import { useMemo } from 'react';
import { useAppSelector } from './use-store';
import { selectIsAuthenticated } from '../../features/auth';

export const useAuth = () => {
  const user = useAppSelector(selectIsAuthenticated);

  return useMemo(() => ({ user }), [user]);
};
