import { CONTACT_INTRO } from '@/constants';
import ContactForm from './contact-form';

export default function ContentSection({
  setErrorHandler
}: {
  setErrorHandler: (value: boolean) => void;
}) {
  return (
    <section className="mb-12">
      <p className="mb-8">{CONTACT_INTRO}</p>
      <ContactForm setErrorHandler={setErrorHandler} />
    </section>
  );
}
