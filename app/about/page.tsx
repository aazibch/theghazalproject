import PageHeader from '@/components/layout/pages/page-header';
import ContentSection from '@/components/about/content-section';
import ContactSection from '@/components/about/contact-section';
import PageContainer from '@/components/layout/pages/page-container';

export default function AboutPage() {
  return (
    <PageContainer>
      <PageHeader heading="About" />
      <ContentSection />
      <ContactSection />
    </PageContainer>
  );
}
