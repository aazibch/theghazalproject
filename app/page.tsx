import { HiInformationCircle } from 'react-icons/hi';
import { Alert } from 'flowbite-react';
import Header from '@/components/layout/header/header';
import HeroCarousel from '@/components/home/hero-carousel/hero-carousel';
import RecentArticles from '@/components/home/recent-articles/recent-articles';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <RecentArticles />
    </>
  );
}
