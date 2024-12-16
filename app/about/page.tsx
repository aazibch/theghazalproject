import PageHeader from '@/components/layout/pages/page-header';
import ContentSection from '@/components/about/content-section';
import ContactSection from '@/components/about/contact-section';

export default function AboutPage() {
  return (
    <>
      <div className="container mx-auto my-12">
        <PageHeader heading="About" />
        <ContentSection />
        <ContactSection />
      </div>
    </>
  );
}
