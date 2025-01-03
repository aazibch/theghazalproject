import { getServerSession } from 'next-auth';
import { ReactNode } from 'react';
import Footer from './footer/footer';
import Header from './header/header';
import config from '@/app/api/auth/[...nextauth]/config';
import EmailNotConfirmedAlert from '../ui/email-not-confirmed-alert';

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await getServerSession(config);

  return (
    <div className="h-full flex flex-col font-inter">
      <Header />
      <main className="grow">
        {session && !session.user.emailConfirmed && <EmailNotConfirmedAlert />}
        {children}
      </main>
      <Footer />
    </div>
  );
}
