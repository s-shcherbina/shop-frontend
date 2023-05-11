import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
  const { isLogged } = useAppSelector((state) => state.auth);
  return isLogged;
};

export const useAuthAdmin = () => {
  const { user } = useAppSelector((state) => state.auth);
  return user?.userData?.role === 'ADMIN' ? true : false;
};

export const useAuthSU = () => {
  const { user } = useAppSelector((state) => state.auth);
  return user?.userData?.role === 'SUPER_USER' ? true : false;
};

export const useAuthAdminOrSU = () => {
  const { user } = useAppSelector((state) => state.auth);
  return user?.userData?.role === 'SUPER_USER' ||
    user?.userData?.role === 'ADMIN'
    ? true
    : false;
};
