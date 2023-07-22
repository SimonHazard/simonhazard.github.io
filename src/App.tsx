import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from './pages/ErrorBoundary.tsx';
import Layout from './layout/Layout.tsx';
import Home from './pages/Home.tsx';
import Articles from './pages/Articles.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/articles',
        element: <Articles />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
