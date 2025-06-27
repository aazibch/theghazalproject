import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';

import PageHeader from '@/components/layout/pages/page-header';
import LoginForm from '@/components/auth/login-form';
import PageContainer from '@/components/layout/pages/page-container';
import config from '@/app/api/auth/[...nextauth]/config';

export const metadata = {
  title: 'Login | The Ghazal Project'
};

export default async function LoginPage() {
  const session = await getServerSession(config);

  if (session) {
    notFound();
  }

  return (
    <PageContainer>
      <div className="pb-28">
        <PageHeader heading="Login" />
        <LoginForm />
      </div>
    </PageContainer>
  );
}
