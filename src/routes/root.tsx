import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { RequireAuth } from '@/context/RequireAuth';
// import { AuthProvider } from '@/context/AuthContext';
import SalePage from '@/pages/sale';
import BaseLayout from '@/layout/baseLayout';
import LoginPage from '@/pages/Auth/login';
const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout />,
        errorElement: <h2>Error 404</h2>,
        children: [
            {
                path: 'dashboard',
                errorElement: <h2>Error 404</h2>,
                element: (
                    // <RequireAuth>
                    <SalePage />
                    // </RequireAuth>   
                ),
            }
        ],
    },
    {
        path: '/login',
        element: <LoginPage />,
        errorElement: <h2 > Error 404</h2>,
    },
]);

const AppRouter = () => {
    return (
        // <AuthProvider>
        <RouterProvider router={router} />
        // </AuthProvider>
    );
};

export default AppRouter;