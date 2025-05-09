import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { LazyGrandmastersList, LazyGrandmasterProfile } from './pages';

// Define routes with lazy-loaded components
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LazyGrandmastersList />,
      },
      {
        path: 'grandmaster/:username',
        element: <LazyGrandmasterProfile />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
