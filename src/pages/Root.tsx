import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

const RootLayout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
