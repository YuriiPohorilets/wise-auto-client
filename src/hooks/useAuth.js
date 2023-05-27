import { useSelector } from 'react-redux';
import {
  selectCurrentUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsLoading,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const user = useSelector(selectCurrentUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);

  return { user, isLoggedIn, isRefreshing, isLoading };
};
