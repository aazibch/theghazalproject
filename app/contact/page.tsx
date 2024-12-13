import ContactForm from '@/components/contact/contact-form';
import PageHeader from '@/components/layout/pages/page-header';

export default function Page() {
  return (
    <div className="container mx-auto my-12">
      <PageHeader heading="Contact" />
      <ContactForm />
    </div>
  );
}
