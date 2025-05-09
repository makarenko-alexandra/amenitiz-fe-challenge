import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import GrandmastersList from './pages/GrandmastersList';
import GrandmasterProfile from './pages/GrandmasterProfile';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <GrandmastersList />,
      },
      {
        path: 'grandmaster/:username',
        element: <GrandmasterProfile />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
