import { ReactNode } from 'react';
import Footer from './footer/footer';
import Header from './header/header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full flex flex-col font-inter">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
