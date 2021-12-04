import { useMemo } from 'react';
import { useAppSelector } from './use-store';
import { selectCurrentUser } from '../../features/auth';

export const useAuth = () => {
  const user = useAppSelector(selectCurrentUser);

  return useMemo(() => ({ user }), [user]);
};
