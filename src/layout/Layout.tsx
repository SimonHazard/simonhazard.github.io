import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col justify-between bg-zinc-100">
      <Header />
      <main className="flex flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
