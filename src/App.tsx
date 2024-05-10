import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import RootLayout from './pages/Root';
import Home from './pages/home/Home';
import { CartContextProvider } from './store/cart.context';

const routes = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Home />,
        children: [{ path: ':productId', element: null }],
      },
    ],
  },
]);

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={routes} />
    </CartContextProvider>
  );
}

export default App;
