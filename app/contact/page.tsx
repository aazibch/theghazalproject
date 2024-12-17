import AboutSection from '@/components/contact/about-section';
import ContentSection from '@/components/contact/content-section/content-section';
import PageContainer from '@/components/layout/pages/page-container';
import PageHeader from '@/components/layout/pages/page-header';

export default function Page() {
  return (
    <PageContainer>
      <PageHeader heading="Contact" />
      <ContentSection />
      <AboutSection />
    </PageContainer>
  );
}
