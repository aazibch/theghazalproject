import { CONTACT_INTRO } from '@/constants';
import ContactForm from './contact-form';

export default function ContentSection() {
  return (
    <section className="mb-12">
      <p className="mb-8">{CONTACT_INTRO}</p>
      <ContactForm />
    </section>
  );
}
