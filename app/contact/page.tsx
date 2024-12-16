import AboutSection from '@/components/contact/about-section';
import ContentSection from '@/components/contact/content-section/content-section';
import PageHeader from '@/components/layout/pages/page-header';

export default function Page() {
  return (
    <div className="container mx-auto my-12">
      <PageHeader heading="Contact" />
      <ContentSection />
      <AboutSection />
    </div>
  );
}
