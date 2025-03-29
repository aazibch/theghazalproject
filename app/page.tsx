import { getServerSession } from 'next-auth';

import { getUser } from '@/lib/actions';
import HeroSection from '@/components/home/hero-section/hero-section';
import ArticlesSection from '@/components/home/articles-section/articles-section';
import GhazalSection from '@/components/home/ghazal-section/ghazal-section';
import AboutSection from '@/components/home/about-section/about-section';
import config from './api/auth/[...nextauth]/config';
import EmailNotConfirmedAlert from '@/components/ui/email-not-confirmed-alert';

export default async function Home() {
  const session = await getServerSession(config);
  let emailConfirmed;

  if (session) {
    const user = await getUser(session?.user.username);
    emailConfirmed = user?.emailConfirmed;
  }

  return (
    <>
      {session && !emailConfirmed && <EmailNotConfirmedAlert />}
      <HeroSection />
      <GhazalSection />
      <ArticlesSection />
      <AboutSection />
    </>
  );
}
