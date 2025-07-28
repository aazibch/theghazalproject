import { notFound } from 'next/navigation';

import PageHeader from '@/components/layout/pages/page-header';
import SignupForm from '@/components/auth/signup-form';
import PageContainer from '@/components/layout/pages/page-container';
import config from '@/app/api/auth/[...nextauth]/config';
import { getSignedInUser } from '@/lib/auth';

export const metadata = {
  title: 'Signup | The Ghazal Project'
};

export default async function SignupPage() {
  const user = await getSignedInUser(config);

  if (user) {
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
