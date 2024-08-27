import HeroSection from '@/components/home/hero-section/hero-section';
import ArticlesSection from '@/components/home/articles-section/articles-section';
import GhazalSection from '@/components/home/ghazal-section/ghazal-section';
import AboutSection from '@/components/home/about-section/about-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <GhazalSection />
      <ArticlesSection />
      <AboutSection />
    </>
  );
}
