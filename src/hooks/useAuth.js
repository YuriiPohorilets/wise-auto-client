import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/authSelectors';

export const useAuth = () => {
  const user = useSelector(selectCurrentUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return useMemo(() => ({ user, isLoggedIn, isRefreshing }), [user, isLoggedIn, isRefreshing]);
};
