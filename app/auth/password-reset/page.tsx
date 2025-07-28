import { notFound } from 'next/navigation';

import PageContainer from '@/components/layout/pages/page-container';
import PageHeader from '@/components/layout/pages/page-header';
import EmailForm from '@/components/auth/password-reset/email-form/email-form';
import config from '@/app/api/auth/[...nextauth]/config';
import { getSignedInUser } from '@/lib/auth';

export const metadata = {
  title: 'Password Reset | The Ghazal Project',
  description:
    'Trouble accessing your account? No problem, we will help you reset your password.'
};

export default async function PasswordResetPage() {
  const user = await getSignedInUser(config);

  if (user) {
    notFound();
  }

  return (
    <PageContainer>
      <div className="pb-28">
        <PageHeader heading="Password Reset" />
        <EmailForm />
      </div>
    </PageContainer>
  );
}
