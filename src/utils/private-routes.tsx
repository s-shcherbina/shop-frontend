import { Navigate, Outlet } from 'react-router-dom';
import { useAuth, useAuthAdmin } from './hooks';

export const AuthRoute = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to='/login' />;
};

export const AdminRoute = () => {
  const admin = useAuthAdmin();
  return admin ? <Outlet /> : <Navigate to='login' />;
};
