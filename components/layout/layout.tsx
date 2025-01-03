import Footer from './footer/footer';
import Header from './header/header';

export default async function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-col font-inter">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
