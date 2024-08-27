import Hero from '@/components/home/hero/hero';
import RecentArticles from '@/components/home/recent-articles/recent-articles';
import RecentGhazalEntries from '@/components/home/recent-ghazal-entries/recent-ghazal-entries';
import AboutExcerpt from '@/components/home/about-excerpt/about-excerpt';

export default function Home() {
  return (
    <>
      <Hero />
      <RecentGhazalEntries />
      <RecentArticles />
      <AboutExcerpt />
    </>
  );
}
