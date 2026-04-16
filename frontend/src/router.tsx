import LoginPage from '@/pages/auth/LoginPage';
import GamePage from '@/pages/game/GamePage';
import LandingPage from '@/pages/LandingPage';
import Layout from '@/pages/Layout';
import NotFound from '@/pages/NotFound';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <LandingPage /> },
            { path: 'game', element: <GamePage /> },
            { path: 'login', element: <LoginPage /> },
        ],
    },
]);

export default router;
