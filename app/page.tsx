import { getServerSession } from 'next-auth';

import HeroSection from '@/components/home/hero-section/hero-section';
import ArticlesSection from '@/components/home/articles-section/articles-section';
import GhazalSection from '@/components/home/ghazal-section/ghazal-section';
import AboutSection from '@/components/home/about-section/about-section';
import config from './api/auth/[...nextauth]/config';
import EmailNotConfirmedAlert from '@/components/ui/email-not-confirmed-alert';

export default async function Home() {
  const session = await getServerSession(config);

  return (
    <>
      {session && !session.user.emailConfirmed && <EmailNotConfirmedAlert />}
      <HeroSection />
      <GhazalSection />
      <ArticlesSection />
      <AboutSection />
    </>
  );
}
