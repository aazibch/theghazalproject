import PageHeader from '@/components/layout/pages/page-header';
import ContentSection from '@/components/about/content-section';
import ContactSection from '@/components/about/contact-section';
import PageContainer from '@/components/layout/pages/page-container';

export const metadata = {
  title: 'About | The Ghazal Project',
  description:
    'The Ghazal Project was founded to celebrate and share the rich artistic heritage of Pakistan and the greater subcontinent with the world. At its heart lies the timeless beauty of the ghazal, a poetic form that has inspired generations with its themes of love, loss, and spirituality.'
};

export default function AboutPage() {
  return (
    <PageContainer>
      <PageHeader heading="About" />
      <ContentSection />
      <ContactSection />
    </PageContainer>
  );
}
