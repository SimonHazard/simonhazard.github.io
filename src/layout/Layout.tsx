import { PropsWithChildren } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col justify-between bg-zinc-100">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
