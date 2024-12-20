import ContactPageContainer from '@/components/contact/contact-page-container';
import { CONTACT_INTRO } from '@/constants';

export const metadata = {
  title: 'Contact | The Ghazal Project',
  description: CONTACT_INTRO
};

export default function Page() {
  return <ContactPageContainer />;
}
