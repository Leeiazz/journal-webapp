import { Navigate, Route, Routes } from 'react-router';
import { JournalPage } from '../pages/JournalPage';

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<JournalPage />}></Route>
      <Route path='/*' element={<Navigate to='/' />}></Route>
    </Routes>
  );
};
