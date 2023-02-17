import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<p>Loading ...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
