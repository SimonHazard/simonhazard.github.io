import { RouterProvider, createHashRouter } from 'react-router-dom';
import ErrorBoundary from './pages/ErrorBoundary.tsx';
import Layout from './layout/Layout.tsx';
import Home from './pages/Home.tsx';
import Articles from './pages/Articles.tsx';
import Article from './pages/Article.tsx';
import { fetchArticle } from './utils/articles.ts';

const router = createHashRouter([
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
        children: [
          { index: true, element: <Articles /> },
          {
            path: ':articleName',
            loader: ({ params }) => fetchArticle(params.articleName),
            element: <Article />
          }
        ]
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
