import { Navigate, Route, Routes } from 'react-router';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='login' element={<LoginPage />}></Route>
      <Route path='register' element={<RegisterPage />}></Route>
      <Route path='/*' element={<Navigate to='/auth/login' />}></Route>
    </Routes>
  );
};
