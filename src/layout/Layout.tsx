import { PropsWithChildren } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-screen w-screen flex-col justify-between bg-creme-50">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
