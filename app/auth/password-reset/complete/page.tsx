import { notFound } from 'next/navigation';

import PageContainer from '@/components/layout/pages/page-container';
import PasswordForm from '@/components/auth/password-reset/password-form/password-form';
import PageHeader from '@/components/layout/pages/page-header';
import config from '@/app/api/auth/[...nextauth]/config';
import { getValidServerSession } from '@/lib/auth';

export const metadata = {
  title: 'Password Reset | The Ghazal Project',
  description:
    'Trouble accessing your account? No problem, we will help you reset your password.'
};

export default async function PasswordResetPage() {
  const session = await getValidServerSession(config);

  if (session) {
    notFound();
  }

  return (
    <PageContainer>
      <div className="pb-28">
        <PageHeader heading="Password Reset" />
        <PasswordForm />
      </div>
    </PageContainer>
  );
}
