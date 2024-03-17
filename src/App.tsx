import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import RootLayout from './pages/Root';
import Home from './pages/home/Home';

const routes = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
