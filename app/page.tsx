import { HiInformationCircle } from 'react-icons/hi';
import { Alert } from 'flowbite-react';
import Header from '@/components/layout/header/header';
import HeroCarousel from '@/components/home/hero-carousel/hero-carousel';
import RecentArticles from '@/components/home/recent-articles/recent-articles';
import RecentGhazalEntries from '@/components/home/recent-ghazal-entries/recent-ghazal-entries';
import AboutExcerpt from '@/components/home/about-excerpt/about-excerpt';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <RecentGhazalEntries />
      <RecentArticles />
      <AboutExcerpt />
    </>
  );
}
