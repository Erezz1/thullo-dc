import { createBrowserRouter } from 'react-router-dom';

import {
  BoardPage,
  LoginPage,
  MainPage,
} from '../pages';

const router = createBrowserRouter([
  {
    path: '/board/:board_id',
    element: <BoardPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <MainPage />,
  },
]);

export default router;
