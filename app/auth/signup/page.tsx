import { notFound } from 'next/navigation';
import { getServerSession } from 'next-auth';

import PageHeader from '@/components/layout/pages/page-header';
import SignupForm from '@/components/auth/signup-form';
import PageContainer from '@/components/layout/pages/page-container';
import config from '@/app/api/auth/[...nextauth]/config';

export const metadata = {
  title: 'Signup | The Ghazal Project'
};

export default async function SignupPage() {
  const session = await getServerSession(config);

  if (session) {
    notFound();
  }

  return (
    <PageContainer>
      <div className="pb-28">
        <PageHeader heading="Signup" />
        <SignupForm />
      </div>
    </PageContainer>
  );
}
